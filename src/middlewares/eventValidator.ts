import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import ResponseHandler from "../utils/responseHandler";

export const createEventValidator: any = [
  body("eventTitle").notEmpty().withMessage("Event title cannot be empty!"),
  body("eventDescription")
    .notEmpty()
    .withMessage("Event description cannot be empty!"),
  body("eventTimeDate.startDate")
    .notEmpty()
    .withMessage("Event start date cannot be empty!"),
  body("eventTimeDate.endDate")
    .notEmpty()
    .withMessage("Event end date cannot be empty!"),
  body("eventTimeDate.startTime")
    .notEmpty()
    .withMessage("Event start time cannot be empty!"),
  body("eventTimeDate.startEnd")
    .notEmpty()
    .withMessage("Event end time cannot be empty!"),
  body("eventTimeDate.timezone")
    .notEmpty()
    .withMessage("Event timezone cannot be empty!"),
  body("eventCategory")
    .notEmpty()
    .withMessage("Event category cannot be empty!"),
  body("eventLocation.addressName")
    .notEmpty()
    .withMessage("Event address name cannot be empty!"),
  body("eventLocation.address")
    .notEmpty()
    .withMessage("Event address cannot be empty!"),
  body("eventLocation.city")
    .notEmpty()
    .withMessage("Event city cannot be empty!"),
  body("eventLocation.country")
    .notEmpty()
    .withMessage("Event country cannot be empty!"),
  body("eventLocation.zipcode").notEmpty(),
  body("ticketTypes.types")
    .notEmpty()
    .withMessage("Ticket types cannot be empty!"),
  body("ticketTypes.price")
    .notEmpty()
    .withMessage("Ticket price cannot be empty, write 0 for free!"),
  body("ticketTypes.quantityAvailable")
    .notEmpty()
    .withMessage("Ticket quantity cannot be empty!"),

  (req: Request, res: Response, next: NextFunction) => {
    const errorValidation = validationResult(req);
    if (!errorValidation) {
      console.log(errorValidation);
      return ResponseHandler.error(
        res,
        "your data is invalid",
        400,
        errorValidation
      );
    }
    next();
  },
];
