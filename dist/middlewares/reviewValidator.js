"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReviewValidator = void 0;
const express_validator_1 = require("express-validator");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
exports.createReviewValidator = [
    (0, express_validator_1.body)("reviewTitle").notEmpty().withMessage("Review cannot be empty!"),
    (0, express_validator_1.body)("reviewScore").notEmpty().withMessage("Score cannot be empty!"),
    (req, res, next) => {
        const errorValidation = (0, express_validator_1.validationResult)(req);
        if (!errorValidation) {
            console.log(errorValidation);
            return responseHandler_1.default.error(res, "your data is invalid", 400, errorValidation);
        }
        next();
    },
];
