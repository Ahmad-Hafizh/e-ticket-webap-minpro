import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma";
import ResponseHandler from "../utils/responseHandler";

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
      const userId = 11;
      const {
        eventTitle,
        eventDescription,
        eventTimeDate,
        eventCategory,
        eventLocation,
        ticketTypes,
        eventImg,
      } = req.body;

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
            user_id: userId,
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
      });

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

  //updateEvent behaviour
  //This API will update the existing event. If user leave the form empty, it will return the previous value (or no change will be made).
  //Require a complete form (event + ticket types)
  //Broken return.. (Success create event, but return error, not sure why)
  async updateEvent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const params = parseInt(req.params.id);
      const userId = 11;
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
        const event = await tx.event.update({
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
              const updateTicket = await tx.ticket_types.update({
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
              const createTicket = await tx.ticket_types.create({
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
        201,
        res
      );
    } catch (error) {
      return ResponseHandler.error(res, "Failed to update event!", 500, error);
    }
  }

  //deleteEvent behaviour
  //This API will delete the existing event, its location, and its ticket_types
  //Will not delete a city and country as it may be used by other event
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
      return ResponseHandler.error(res, "Failed to delete event", 500, error);
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
      return ResponseHandler.error(res, "Get Event Failed", 500, error);
    }
  }

  //ADVANCED CRUD

  //LIST API NEED FOR FILTERING FUNCTION:

  //getEventByCategory

  //getEventByUserCreator

  //getEventByDate (descending and ascending)

  //getEventByPrice (descending and ascending)

  //getEventByLocation (city and country)

  //getEventByRating

  //getEventByMostPurchased (HOT EVENT)
}
