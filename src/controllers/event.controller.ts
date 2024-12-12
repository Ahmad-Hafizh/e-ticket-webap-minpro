import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma";
import ResponseHandler from "../utils/responseHandler";

export class EventController {
  async createEvent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const userId = res.locals.dcrypt.id as number;
    const {
      eventTitle,
      eventDescription,
      eventTimeDate,
      eventCategory,
      eventLocation,
      ticketTypes,
      eventImg,
    } = req.body;
    console.log(req.body);
    try {
      //Create and/or update city
      const city = await prisma.location_city.upsert({
        where: { city_name: eventLocation.city },
        update: {},
        create: { city_name: eventLocation.city },
      });

      //Create and/or update country
      const country = await prisma.location_country.upsert({
        where: { country_name: eventLocation.country },
        update: {},
        create: { country_name: eventLocation.country },
      });

      //Create Address
      const eventLoc = await prisma.event_Location.create({
        data: {
          address_name: eventLocation.addressName,
          address: eventLocation.address,
          location_city_id: city.location_city_id,
          location_country_id: country.location_country_id,
          zipcode: eventLocation.zipcode,
        },
      });

      //Event
      const event = await prisma.event.create({
        data: {
          user_id: userId,
          event_category: {
            connect: eventCategory.map((value: number) => ({
              event_category_id: value,
            })),
          },
          title: eventTitle,
          description: eventDescription,
          coupon_id: 1,
          imgEvent: eventImg,
          time_date: eventTimeDate,
          createdAt: new Date(),
          updatedAt: new Date(),
          event_location_id: eventLoc.event_location_id,
        },
      });

      //Ticket types
      const ticket = ticketTypes.map((value: any) => ({
        types: value.type,
        price: value.price,
        quantity_available: value.quantityAvailable,
        event_id: value.event_id,
      }));

      return ResponseHandler.success(
        res,
        "Event created successfully!",
        200,
        res
      );
    } catch (error) {
      return ResponseHandler.error(res, "Created Event Failed", 500, error);
    }
  }
}
