import { Request, Response, NextFunction, query } from "express";
import { prisma } from "../config/prisma";
import ResponseHandler from "../utils/responseHandler";
import { transporter } from "../config/nodemailer";

//
export class EventController {
  //BASIC CRUD (NO ADVANCED ERROR HANDLING YET)

  //createEvent behaviour
  //This API will create event immediately, with all the needed data. Payload reference: event.json
  //So it require a complete form (event + ticket types)
  //Also need a userID which can be obtained through a res.locals property
  //Broken return.. (Success create event, but return error, not sure why)
  async createEvent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user = { id: 17 };
      const {
        eventTitle,
        eventDescription,
        eventTimeDate,
        eventCategory,
        eventLocation,
        ticketTypes,
        eventImg,
      } = req.body;

      const response = await prisma.$transaction(async (tx) => {
        //Create and/or update city
        const city = await tx.location_city.upsert({
          where: { city_name: eventLocation.city },
          update: {},
          create: { city_name: eventLocation.city },
        });

        //Create and/or update country
        const country = await tx.location_country.upsert({
          where: { country_name: eventLocation.country },
          update: {},
          create: { country_name: eventLocation.country },
        });

        //Create Address
        const eventLoc = await tx.event_Location.create({
          data: {
            address_name: eventLocation.addressName,
            address: eventLocation.address,
            location_city_id: city.location_city_id,
            location_country_id: country.location_country_id,
            zipcode: eventLocation.zipcode,
          },
        });

        //Created Event
        const event = await tx.event.create({
          data: {
            user_id: user.id,
            event_category: {
              connect: eventCategory.map((value: string) => ({
                category_name: value,
              })), //coba explore relasi prisma
            },
            title: eventTitle,
            description: eventDescription,
            coupon_id: 1,
            imgEvent: eventImg,
            startDate: new Date(eventTimeDate.startDate),
            endDate: new Date(eventTimeDate.endDate),
            startTime: eventTimeDate.startTime,
            endTime: eventTimeDate.endTime,
            createdAt: new Date(),
            updatedAt: new Date(),
            timezone: eventTimeDate.timezone,
            event_location_id: eventLoc.event_location_id,
          },
        });

        //Structuring ticket array
        const ticket = ticketTypes.map((value: any) => ({
          event_id: event.event_id,
          types: value.types,
          price: value.price,
          quantity_available: value.quantityAvailable,
        }));

        //Input ticket array to prisma
        await tx.ticket_types.createMany({
          data: ticket,
          skipDuplicates: true,
        });
        return;
      });

      // await transporter.sendMail({
      //   from: "e-ticket",
      //   to: user.email,
      //   subject: "Your event is ready to rock",
      //   html: `<div>
      //      <h1>Thank you ${user.name}, your event is ready to rock.</h1>
      //      <p>Invite people to attract more audience</p>
      //      </div>`,
      // });

      return ResponseHandler.success(
        res,
        "Event created successfully!",
        201,
        response
      );
    } catch (error) {
      return ResponseHandler.error(
        res,
        "Created Event Failed, internal server error",
        500,
        error
      );
    }
  }

  //updateEvent behaviour
  //This API will update the existing event. If user leave the form empty, it will return the previous value (or no change will be made).
  //Require a complete form (event + ticket types)
  //Also need a userID which can be obtained through a res.locals property
  //Broken return.. (Success create event, but return error, not sure why)
  async updateEvent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const params = parseInt(req.params.id);
      const userId = res.locals.dcrypt.id;
      const {
        eventTitle,
        eventDescription,
        eventTimeDate,
        eventCategory,
        eventLocation,
        ticketTypes,
        eventImg,
      } = req.body;

      const checkEventExist = await prisma.event.findUnique({
        where: {
          event_id: params,
        },
        include: {
          ticket_types: true,
          event_location: true,
          event_category: true,
        },
      });

      if (!checkEventExist) {
        throw new Error("Event not found!");
      }

      await prisma.$transaction(async (tx) => {
        //Create and/or update city
        const city = await tx.location_city.upsert({
          where: { city_name: eventLocation.city },
          update: {},
          create: { city_name: eventLocation.city },
        });

        //Create and/or update country
        const country = await tx.location_country.upsert({
          where: { country_name: eventLocation.country },
          update: {},
          create: { country_name: eventLocation.country },
        });

        //Update Address
        const eventLoc = await tx.event_Location.update({
          where: {
            event_location_id: checkEventExist.event_location_id,
          },
          data: {
            address_name:
              eventLocation.addressName ||
              checkEventExist.event_location.address_name,
            address:
              eventLocation.address ||
              checkEventExist.event_location.address_name,
            location_city_id:
              city.location_city_id ||
              checkEventExist.event_location.location_city_id,
            location_country_id:
              country.location_country_id ||
              checkEventExist.event_location.location_country_id,
            zipcode:
              eventLocation.zipcode || checkEventExist.event_location.zipcode,
          },
        });

        //Update Event
        await tx.event.update({
          where: { event_id: params },
          data: {
            user_id: userId,
            event_category: {
              connect: eventCategory.map((value: string) => ({
                category_name: value,
              })),
            },
            title: eventTitle || checkEventExist.title,
            description: eventDescription || checkEventExist.description,
            coupon_id: 1,
            imgEvent: eventImg || checkEventExist.imgEvent,
            startDate:
              new Date(eventTimeDate.startDate) || checkEventExist.startDate,
            endDate: new Date(eventTimeDate.endDate) || checkEventExist.endDate,
            startTime: eventTimeDate.startTime || checkEventExist.startTime,
            endTime: eventTimeDate.endTime || checkEventExist.endTime,
            createdAt: checkEventExist.createdAt,
            updatedAt: new Date(),
            timezone: eventTimeDate.timezone || checkEventExist.timezone,
            event_location_id:
              eventLoc.event_location_id || checkEventExist.event_location_id,
          },
        });

        //Update Ticket
        if (ticketTypes) {
          for (const ticket of ticketTypes) {
            const ticketExist = checkEventExist.ticket_types.find(
              //Check if ticket types already exist
              (value: any) => value.types === ticket.types
            );

            if (ticketExist) {
              //If exist, update existing ticket
              await tx.ticket_types.update({
                where: {
                  ticket_types_id: ticketExist.ticket_types_id,
                },
                data: {
                  event_id: checkEventExist.event_id,
                  types: ticket.types,
                  price: ticket.price,
                  quantity_available: ticket.quantityAvailable,
                },
              });
            } else {
              //If not, create new ticket
              await tx.ticket_types.create({
                data: {
                  event_id: checkEventExist.event_id,
                  types: ticket.types,
                  price: ticket.price,
                  quantity_available: ticket.quantityAvailable,
                },
              });
            }
          }
        }
      });
      return ResponseHandler.success(
        res,
        "Event updated Successfully",
        200,
        res
      );
    } catch (error) {
      return ResponseHandler.error(
        res,
        "Failed to update event! Internal server error!",
        500,
        error
      );
    }
  }

  //deleteEvent behaviour
  //This API will delete the existing event, its location, and its ticket_types
  //Will not delete a city and country as it may be used by other event
  //Also need a userID which can be obtained through a res.locals property
  //Broken return.. (Success create event, but return error, not sure why)
  async deleteEvent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const params = parseInt(req.params.id);

      const checkEventExist = await prisma.event.findUnique({
        where: {
          event_id: params,
        },
        include: {
          ticket_types: true,
          event_location: true,
          event_category: true,
        },
      });

      if (!checkEventExist) {
        throw new Error("Event not found!");
      }

      await prisma.$transaction([
        prisma.ticket_types.deleteMany({
          where: {
            event_id: checkEventExist.event_id,
          },
        }),
        prisma.event.delete({
          where: {
            event_id: checkEventExist.event_id,
          },
        }),
        prisma.event_Location.delete({
          where: { event_location_id: checkEventExist.event_location_id },
        }),
      ]);
      return ResponseHandler.success(
        res,
        "Event deleted successfully",
        200,
        res
      );
    } catch (error) {
      return ResponseHandler.error(
        res,
        "Failed to delete event! Internal server error!",
        500,
        error
      );
    }
  }

  //getSpecificEvent bheaviour
  //This API will return a specific inquired event with all the details (including the ticket types)
  async getSpecificEvent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const params = parseInt(req.params.id);
      const response = await prisma.event.findUnique({
        where: {
          event_id: params,
        },
      });
      return ResponseHandler.success(res, "Get Event Success", 200, response);
    } catch (error) {
      return ResponseHandler.error(
        res,
        "Get Event Failed! Internal server error!",
        500,
        error
      );
    }
  }

  //ADVANCED CRUD

  //API query:
  //cat = category
  //eo = creator
  //startdate = start date
  //enddate = end date
  //city = city
  //country = country
  //pricemin = minimum price
  //pricemax = maximum price
  //sortby = sorting by
  //orderby = order by

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
      } = req.query;
      const result = await prisma.event.findMany({
        where: {
          event_category: {
            some: {
              category_name: Array.isArray(cat)
                ? { in: cat }
                : cat || undefined, //If cat is array (multiple queries, then use the keyword "in")
            },
          },
          user_id: (parseInt(eo as string) as number) || undefined, //query by user
          ticket_types: {
            every: {
              price: {
                gte: parseInt(pricemin as string) || undefined, //query by price min
                lte: parseInt(pricemax as string) || undefined, //query by price max
              },
            },
          },
          event_location: {
            location_city_id: parseInt(city as string) || undefined, //query by city
            location_country_id: parseInt(country as string) || undefined, //query by country
          },
          startDate: {
            gte: new Date(startdate as string) || undefined,
          },
          endDate: {
            lte: new Date(enddate as string) || undefined,
          },
        },

        include: {
          event_category: true,
          event_location: true,
          ticket_types: true,
        },

        orderBy: {
          [sortby as string]: orderby || undefined, //Akses properti sortby (isinya nama properti).
        },
      });
      return ResponseHandler.success(res, "Filter Success", 200, result);
    } catch (error) {
      return ResponseHandler.error(res, "Filter Error", 500, error);
    }
  }

  //getEventByMostPurchased (HOT EVENT) => REDIS
  async hotEvent(req: Request, res: Response): Promise<any> {
    try {
    } catch (error) {}
  }
}
