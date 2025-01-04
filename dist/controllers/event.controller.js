"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const prisma_1 = require("../config/prisma");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
//
class EventController {
    getAllEvent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield prisma_1.prisma.event.findMany({
                    include: {
                        event_location: true,
                        ticket_types: true,
                        organizer: true,
                        event_category: true,
                    },
                });
                return responseHandler_1.default.success(res, "Get All Event Success", 200, response);
            }
            catch (error) {
                return responseHandler_1.default.error(res, "Get All Event Failed", 500, error);
            }
        });
    }
    //BASIC CRUD (NO ADVANCED ERROR HANDLING YET)
    //createEvent behaviour
    //This API will create event immediately, with all the needed data. Payload reference: event.json
    //So it require a complete form (event + ticket types)
    //Also need a userID which can be obtained through a res.locals property
    //Broken return.. (Success create event, but return error, not sure why)
    createEvent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const organizer = yield prisma_1.prisma.organizer.findUnique({
                    where: { user_id: res.locals.dcrypt.user_id },
                });
                if (!organizer) {
                    throw new Error("User unauthorized");
                }
                const { eventTitle, eventDescription, eventTimeDate, eventCategory, eventLocation, ticketTypes, eventImg, score, } = req.body;
                const response = yield prisma_1.prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    //Create and/or update city
                    const city = yield tx.location_city.upsert({
                        where: { city_name: eventLocation.city },
                        update: {},
                        create: { city_name: eventLocation.city },
                    });
                    //Create and/or update country
                    const country = yield tx.location_country.upsert({
                        where: { country_name: eventLocation.country },
                        update: {},
                        create: { country_name: eventLocation.country },
                    });
                    //Create Address
                    const eventLoc = yield tx.event_Location.create({
                        data: {
                            address_name: eventLocation.addressName,
                            address: eventLocation.address,
                            location_city_id: city.location_city_id,
                            location_country_id: country.location_country_id,
                            zipcode: eventLocation.zipcode,
                        },
                    });
                    //Created Event
                    const event = yield tx.event.create({
                        data: {
                            organizer_id: organizer === null || organizer === void 0 ? void 0 : organizer.organizer_id,
                            event_category: {
                                connect: eventCategory.map((value) => ({
                                    category_name: value,
                                })),
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
                            score: score,
                            event_location_id: eventLoc.event_location_id,
                        },
                    });
                    //Structuring ticket array
                    const ticket = ticketTypes.map((value) => ({
                        event_id: event.event_id,
                        types: value.types,
                        price: value.price,
                        quantity_available: value.quantityAvailable,
                    }));
                    //Input ticket array to prisma
                    yield tx.ticket_types.createMany({
                        data: ticket,
                        skipDuplicates: true,
                    });
                    return event;
                }));
                // await transporter.sendMail({
                //   from: "e-ticket",
                //   to: user.email,
                //   subject: "Your event is ready to rock",
                //   html: `<div>
                //      <h1>Thank you ${user.name}, your event is ready to rock.</h1>
                //      <p>Invite people to attract more audience</p>
                //      </div>`,
                // });
                return responseHandler_1.default.success(res, "Event created successfully!", 201, response);
            }
            catch (error) {
                console.log(error);
                return responseHandler_1.default.error(res, "Created Event Failed, internal server error", 500, error);
            }
        });
    }
    //updateEvent behaviour
    //This API will update the existing event. If user leave the form empty, it will return the previous value (or no change will be made).
    //Require a complete form (event + ticket types)
    //Also need a userID which can be obtained through a res.locals property
    //Broken return.. (Success create event, but return error, not sure why)
    updateEvent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const organizer = yield prisma_1.prisma.organizer.findUnique({
                    where: { user_id: res.locals.dcrypt.user_id },
                });
                if (!organizer) {
                    throw new Error("User unauthorized");
                }
                const { eventTitle, eventDescription, eventTimeDate, eventCategory, eventLocation, ticketTypes, eventImg, } = req.body;
                const params = parseInt(req.params.id);
                const checkEventExist = yield prisma_1.prisma.event.findUnique({
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
                const response = yield prisma_1.prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    //Create and/or update city
                    const city = yield tx.location_city.upsert({
                        where: { city_name: eventLocation.city },
                        update: {},
                        create: { city_name: eventLocation.city },
                    });
                    //Create and/or update country
                    const country = yield tx.location_country.upsert({
                        where: { country_name: eventLocation.country },
                        update: {},
                        create: { country_name: eventLocation.country },
                    });
                    //Update Address
                    const eventLoc = yield tx.event_Location.update({
                        where: {
                            event_location_id: checkEventExist.event_location_id,
                        },
                        data: {
                            address_name: eventLocation.addressName ||
                                checkEventExist.event_location.address_name,
                            address: eventLocation.address ||
                                checkEventExist.event_location.address_name,
                            location_city_id: city.location_city_id ||
                                checkEventExist.event_location.location_city_id,
                            location_country_id: country.location_country_id ||
                                checkEventExist.event_location.location_country_id,
                            zipcode: eventLocation.zipcode || checkEventExist.event_location.zipcode,
                        },
                    });
                    //Update Event
                    const event = yield tx.event.update({
                        where: { event_id: params },
                        data: {
                            organizer_id: organizer === null || organizer === void 0 ? void 0 : organizer.organizer_id,
                            event_category: {
                                connect: eventCategory.map((value) => ({
                                    category_name: value,
                                })),
                            },
                            title: eventTitle || checkEventExist.title,
                            description: eventDescription || checkEventExist.description,
                            coupon_id: 1,
                            imgEvent: eventImg || checkEventExist.imgEvent,
                            startDate: new Date(eventTimeDate.startDate) || checkEventExist.startDate,
                            endDate: new Date(eventTimeDate.endDate) || checkEventExist.endDate,
                            startTime: eventTimeDate.startTime || checkEventExist.startTime,
                            endTime: eventTimeDate.endTime || checkEventExist.endTime,
                            createdAt: checkEventExist.createdAt,
                            updatedAt: new Date(),
                            timezone: eventTimeDate.timezone || checkEventExist.timezone,
                            event_location_id: eventLoc.event_location_id || checkEventExist.event_location_id,
                        },
                    });
                    //Update Ticket
                    if (ticketTypes) {
                        for (const ticket of ticketTypes) {
                            const ticketExist = checkEventExist.ticket_types.find(
                            //Check if ticket types already exist
                            (value) => value.types === ticket.types);
                            if (ticketExist) {
                                //If exist, update existing ticket
                                yield tx.ticket_types.update({
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
                            }
                            else {
                                //If not, create new ticket
                                yield tx.ticket_types.create({
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
                }));
                console.log(response);
                return responseHandler_1.default.success(res, "Event updated Successfully", 200, response);
            }
            catch (error) {
                console.log(error);
                return responseHandler_1.default.error(res, "Failed to update event! Internal server error!", 500, error);
            }
        });
    }
    //deleteEvent behaviour
    //This API will delete the existing event, its location, and its ticket_types
    //Will not delete a city and country as it may be used by other event
    //Also need a userID which can be obtained through a res.locals property
    //Broken return.. (Success create event, but return error, not sure why)
    deleteEvent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = parseInt(req.params.id);
                const checkEventExist = yield prisma_1.prisma.event.findUnique({
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
                const response = yield prisma_1.prisma.$transaction([
                    prisma_1.prisma.ticket_types.deleteMany({
                        where: {
                            event_id: checkEventExist.event_id,
                        },
                    }),
                    prisma_1.prisma.event.delete({
                        where: {
                            event_id: checkEventExist.event_id,
                        },
                    }),
                    prisma_1.prisma.event_Location.delete({
                        where: { event_location_id: checkEventExist.event_location_id },
                    }),
                ]);
                return responseHandler_1.default.success(res, "Event deleted successfully", 200);
            }
            catch (error) {
                return responseHandler_1.default.error(res, "Failed to delete event! Internal server error!", 500, error);
            }
        });
    }
    //getSpecificEvent bheaviour
    //This API will return a specific inquired event with all the details (including the ticket types)
    getSpecificEvent(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title } = req.params;
                const response = yield prisma_1.prisma.event.findFirst({
                    where: {
                        title: title,
                    },
                    include: {
                        event_location: true,
                        ticket_types: true,
                        review: {
                            include: {
                                user: true,
                            },
                        },
                    },
                });
                return responseHandler_1.default.success(res, "Get Event Success", 200, response);
            }
            catch (error) {
                return responseHandler_1.default.error(res, "Get Event Failed! Internal server error!", 500, error);
            }
        });
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
    hotEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
            }
            catch (error) { }
        });
    }
    getEventLocation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const location = yield prisma_1.prisma.location_city.findMany();
                console.log("Ini location", location);
                return responseHandler_1.default.success(res, "Get all location success", 200, location);
            }
            catch (error) {
                return responseHandler_1.default.error(res, "Get location error", 500);
            }
        });
    }
    getEventMainPage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const topEvents = yield prisma_1.prisma.event.findMany({
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
                const categories = yield prisma_1.prisma.event.findMany({
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
                const location = yield prisma_1.prisma.event.findMany({
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
                const organizer = yield prisma_1.prisma.organizer.findMany({
                    take: 8,
                });
                const response = {
                    topEvents,
                    categories,
                    location,
                    organizer,
                };
                return responseHandler_1.default.success(res, "Get all event success", 200, response);
            }
            catch (error) {
                return responseHandler_1.default.error(res, "Get all event error", 500);

            }
        });
    }
}
exports.EventController = EventController;
