"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEventValidator = void 0;
const express_validator_1 = require("express-validator");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
exports.createEventValidator = [
    (0, express_validator_1.body)("eventTitle").notEmpty().withMessage("Event title cannot be empty!"),
    (0, express_validator_1.body)("eventDescription")
        .notEmpty()
        .withMessage("Event description cannot be empty!"),
    (0, express_validator_1.body)("eventTimeDate.startDate")
        .notEmpty()
        .withMessage("Event start date cannot be empty!"),
    (0, express_validator_1.body)("eventTimeDate.endDate")
        .notEmpty()
        .withMessage("Event end date cannot be empty!"),
    (0, express_validator_1.body)("eventTimeDate.startTime")
        .notEmpty()
        .withMessage("Event start time cannot be empty!"),
    (0, express_validator_1.body)("eventTimeDate.startEnd")
        .notEmpty()
        .withMessage("Event end time cannot be empty!"),
    (0, express_validator_1.body)("eventTimeDate.timezone")
        .notEmpty()
        .withMessage("Event timezone cannot be empty!"),
    (0, express_validator_1.body)("eventCategory")
        .notEmpty()
        .withMessage("Event category cannot be empty!"),
    (0, express_validator_1.body)("eventLocation.addressName")
        .notEmpty()
        .withMessage("Event address name cannot be empty!"),
    (0, express_validator_1.body)("eventLocation.address")
        .notEmpty()
        .withMessage("Event address cannot be empty!"),
    (0, express_validator_1.body)("eventLocation.city")
        .notEmpty()
        .withMessage("Event city cannot be empty!"),
    (0, express_validator_1.body)("eventLocation.country")
        .notEmpty()
        .withMessage("Event country cannot be empty!"),
    (0, express_validator_1.body)("eventLocation.zipcode").notEmpty(),
    (0, express_validator_1.body)("ticketTypes.types")
        .notEmpty()
        .withMessage("Ticket types cannot be empty!"),
    (0, express_validator_1.body)("ticketTypes.price")
        .notEmpty()
        .withMessage("Ticket price cannot be empty, write 0 for free!"),
    (0, express_validator_1.body)("ticketTypes.quantityAvailable")
        .notEmpty()
        .withMessage("Ticket quantity cannot be empty!"),
    (req, res, next) => {
        const errorValidation = (0, express_validator_1.validationResult)(req);
        if (!errorValidation) {
            console.log(errorValidation);
            return responseHandler_1.default.error(res, "your data is invalid", 400, errorValidation);
        }
        next();
    },
];
