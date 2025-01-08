import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma";
import ResponseHandler from "../utils/responseHandler";
// import redisClient from "../config/redis";
import { transporter } from "../config/nodemailer";
import { error } from "console";
import { Result } from "express-validator";
import { cloudinaryUpload } from "../config/cloudinary";

//
export class EventController {
  async getAllEvent(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const response = await prisma.event.findMany({
        include: {
          event_location: true,
          ticket_types: true,
          organizer: true,
          event_category: true,
        },
      });
      return ResponseHandler.success(
        res,
        "Get All Event Success",
        200,
        response
      );
    } catch (error) {
      return ResponseHandler.error(res, "Get All Event Failed", 500, error);
    }
  }

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
      const organizer = await prisma.organizer.findUnique({
        where: { user_id: res.locals.dcrypt.user_id },
      });

      if (!organizer) {
        throw new Error("User unauthorized");
      }

      const {
        eventTitle,
        eventDescription,
        eventCategory,

        eventImg,
        score,
      } = req.body;

      if (!req.file) {
        throw new Error("No file uploaded");
      }
      //JSON PARSING FIRST
      const eventLocation = JSON.parse(req.body.eventLocation);
      const eventTimeDate = JSON.parse(req.body.eventTimeDate);
      const organizerCouponInput = JSON.parse(req.body.organizerCouponInput);
      const ticketTypes = JSON.parse(req.body.ticketTypes);
      const eventCategoryInput = JSON.parse(req.body.eventCategory);
      console.log("Ini req.body: ", req.body);
      console.log("Ini req.file:", req.file);

      const { secure_url } = await cloudinaryUpload(req.file, "eventBanner");

      const response = await prisma.$transaction(async (tx) => {
        //Create and/or update city
        const city = await tx.location_city.upsert({
          where: { city_name: eventLocation.city },
          update: {},
          create: { city_name: eventLocation.city },
        });
        console.log("Ini city: ", city);

        //Create and/or update country
        const country = await tx.location_country.upsert({
          where: { country_name: eventLocation.country },
          update: {},
          create: { country_name: eventLocation.country },
        });
        console.log("Ini country: ", country);

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
        console.log("Ini event loc: ", eventLoc);

        const organizerCoupon = await tx.organizerCoupon.create({
          data: {
            organizer_coupon_code: organizerCouponInput.organizer_coupon_code,
            organizer_id: organizer?.organizer_id as number,
            start_date: new Date(organizerCouponInput.startDate),
            expired_date: new Date(organizerCouponInput.endDate),
            discount: parseInt(organizerCouponInput.discount),
            quantity: parseInt(organizerCouponInput.quantity),
          },
        });
        console.log("Ini organizer coupon: ", organizerCoupon);

        //Created Event
        const event = await tx.event.create({
          data: {
            organizer_id: organizer?.organizer_id as number,
            event_category: {
              connect: eventCategoryInput.map((value: string) => ({
                category_name: value,
              })),
            },
            title: eventTitle,
            description: eventDescription,
            organizer_coupon_id: organizerCoupon.organizer_coupon_id,
            imgEvent: secure_url,
            startDate: new Date(eventTimeDate.startDate),
            endDate: new Date(eventTimeDate.endDate),
            startTime: eventTimeDate.startTime,
            endTime: eventTimeDate.endTime,
            createdAt: new Date(),
            updatedAt: new Date(),
            timezone: eventTimeDate.timezone,
            score: score,
            event_location_id: eventLoc.event_location_id,
          },
        });

        //Structuring ticket array
        const ticket = ticketTypes.map((value: any) => ({
          event_id: event.event_id,
          types: value.types,
          price: parseInt(value.price),
          quantity_available: parseInt(value.quantityAvailable),
        }));

        //Input ticket array to prisma
        await tx.ticket_types.createMany({
          data: ticket,
          skipDuplicates: true,
        });
        return event;
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
      console.log(error);
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
      const organizer = await prisma.organizer.findUnique({
        where: { user_id: res.locals.dcrypt.user_id },
      });

      if (!organizer) {
        throw new Error("User unauthorized");
      }
      const {
        eventTitle,
        eventDescription,
        eventTimeDate,
        eventCategory,
        eventLocation,
        ticketTypes,
        eventImg,
        organizerCouponInput,
      } = req.body;

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

      if (checkEventExist.organizer_id !== organizer.organizer_id) {
        throw new Error("You are unauthorized to overwrite this event");
      }

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
            organizer_id: organizer?.organizer_id,
            event_category: {
              connect: eventCategory.map((value: string) => ({
                category_name: value,
              })),
            },
            title: eventTitle || checkEventExist.title,
            description: eventDescription || checkEventExist.description,
            organizer_coupon_id: 1,
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
        return event;
      });

      console.log(response);

      return ResponseHandler.success(
        res,
        "Event updated Successfully",
        200,
        response
      );
    } catch (error) {
      console.log(error);
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

      const response = await prisma.$transaction([
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
      return ResponseHandler.success(res, "Event deleted successfully", 200);
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
      const { title } = req.params;

      const response = await prisma.event.findFirst({
        where: {
          title: title,
        },
        include: {
          event_location: true,
          ticket_types: true,
          organizer: true,
          customer: true,
          organizer_coupon: true,
          review: {
            include: {
              user: true,
            },
          },
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

  //getEventByMostPurchased (HOT EVENT) => REDIS
  async hotEvent(req: Request, res: Response): Promise<any> {
    try {
    } catch (error) {}
  }

  async getEventLocation(req: Request, res: Response): Promise<any> {
    try {
      const location = await prisma.location_city.findMany();
      console.log("Ini location", location);
      return ResponseHandler.success(
        res,
        "Get all location success",
        200,
        location
      );
    } catch (error) {
      return ResponseHandler.error(res, "Get location error", 500);
    }
  }

  async getEventMainPage(req: Request, res: Response): Promise<any> {
    try {
      const topEvents = await prisma.event.findMany({
        where: {
          score: {
            gte: 2,
          },
        },
        include: {
          ticket_types: true,
          organizer: true,
        },
        take: 3,
      });

      const categories = await prisma.event.findMany({
        where: {
          event_category: {
            some: {
              category_name: "Music",
            },
          },
        },

        include: {
          event_category: true,
          ticket_types: true,
          organizer: true,
        },
        take: 8,
      });

      const location = await prisma.event.findMany({
        where: {
          event_location: {
            location_city_id: 15,
          },
        },
        include: {
          ticket_types: true,
          organizer: true,
        },
        take: 8,
      });

      const organizer = await prisma.organizer.findMany({
        take: 8,
      });

      const response = {
        topEvents,
        categories,
        location,
        organizer,
      };

      return ResponseHandler.success(
        res,
        "Get all event success",
        200,
        response
      );
    } catch (error) {
      return ResponseHandler.error(res, "Get all event error", 500);
    }
  }
}
