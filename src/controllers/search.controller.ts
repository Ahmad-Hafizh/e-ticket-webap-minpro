import e, { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma";
import ResponseHandler from "../utils/responseHandler";

export class SearchController {
  //Behvaiour = API can be called following the above query. Can be mixed and matched.
  //Category query can be called with multiple value, e.g. localhost/event?cat=music,theatre => to filter event in the music and theatre category
  async filterEvent(req: Request, res: Response): Promise<any> {
    try {
      const {
        cat, //cat name
        eo, //userid
        startdate,
        enddate,
        city, //city id
        country, //country id
        pricemin,
        pricemax,
        sortby,
        orderby,
        keyword,
        page,
      } = req.query;
      const url = req.url;
      //PR CEK QUERY

      let cityIds: number[] | undefined;
      if (city) {
        const cityNames = (city as string)
          .split(",")
          .map((name) => name.trim());
        const cityData = await prisma.location_city.findMany({
          where: {
            city_name: { in: cityNames },
          },
        });
        cityIds = cityData.map((city) => city.location_city_id);
      }

      const categoriesList = cat
        ? (cat as string).split(",").map((name) => name.trim())
        : undefined;

      let countryIds: number[] | undefined;
      if (countryIds) {
        const countryNames = (country as string)
          .split(",")
          .map((name) => name.trim());
        const countryData = await prisma.location_country.findMany({
          where: {
            country_name: { in: countryNames },
          },
        });
        countryIds = countryData.map((country) => country.location_country_id);
      }

      const pageNumber = parseInt(page as string);
      const pageSize = 6;

      const eoId = eo ? parseInt(eo as string) : undefined;

      const result = await prisma.event.findMany({
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
        where: {
          event_category: {
            some: {
              category_name: categoriesList
                ? { in: categoriesList }
                : undefined,
            },
          },
          title: {
            contains: (keyword as string) || undefined,
            mode: "insensitive",
          },
          organizer_id: eoId ? eoId : undefined,
          ticket_types: {
            every: {
              price: {
                gte: parseInt(pricemin as string) || undefined, //query by price min
                lte: parseInt(pricemax as string) || undefined, //query by price max
              },
            },
          },
          event_location: {
            location_city_id: cityIds ? { in: cityIds } : undefined, //query by city
            location_country_id: countryIds ? { in: countryIds } : undefined, //query by country
          },
          AND: [
            startdate
              ? {
                  startDate: {
                    gte: new Date(startdate as string) || undefined,
                  },
                }
              : {},
            enddate
              ? {
                  endDate: {
                    lte: new Date(enddate as string) || undefined,
                  },
                }
              : {},
          ],
        },

        include: {
          event_category: true,
          event_location: true,
          ticket_types: true,
          review: true,
          organizer: true,
        },

        orderBy: {
          createdAt: "desc", //Akses properti sortby (isinya nama properti).
        },
      });

      //Filter price range
      const priceRange = result.map((value: any) => {
        const minPrice = value.ticket_types.length
          ? Math.min(...value.ticket_types.map((value: any) => value.price))
          : null;

        return {
          ...value,
          min_price: minPrice as any,
        };
      });

      const filteredEventFinal = priceRange.filter((value: any) => {
        if (pricemin && value.min_price < parseInt(pricemin as string)) {
          return false;
        } else if (pricemax && value.min_price > parseInt(pricemax as string)) {
          return false;
        }
        return true;
      });

      //Count how many items sesuai filter di db
      const totalEvents = await prisma.event.count({
        where: {
          event_category: {
            some: {
              category_name: categoriesList
                ? { in: categoriesList }
                : undefined,
            },
          },
          title: {
            contains: (keyword as string) || undefined,
          },
          organizer_id: (parseInt(eo as string) as number) || undefined, // query by user
          ticket_types: {
            every: {
              price: {
                gte: parseInt(pricemin as string) || undefined, // query by price min
                lte: parseInt(pricemax as string) || undefined, // query by price max
              },
            },
          },
          event_location: {
            location_city_id: cityIds ? { in: cityIds } : undefined, // query by city
            location_country_id: countryIds ? { in: countryIds } : undefined, // query by country
          },
          AND: [
            startdate
              ? {
                  startDate: {
                    gte: new Date(startdate as string) || undefined,
                  },
                }
              : {},
            enddate
              ? {
                  endDate: {
                    lte: new Date(enddate as string) || undefined,
                  },
                }
              : {},
          ],
        },
      });

      const totalPages = Math.ceil(totalEvents / pageSize);

      const payload = {
        events: filteredEventFinal,
        currentPage: pageNumber,
        totalPages: totalPages,
      };

      return ResponseHandler.success(res, "Filter Success", 200, payload);
    } catch (error) {
      console.log(error);
      return ResponseHandler.error(res, "Filter Error", 500, error);
    }
  }
}
