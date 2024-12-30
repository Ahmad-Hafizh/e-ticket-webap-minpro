"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInValidator = exports.signUpValidator = void 0;
const express_validator_1 = require("express-validator");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
exports.signUpValidator = [
    (0, express_validator_1.body)('name').notEmpty(),
    (0, express_validator_1.body)('email').notEmpty().isEmail().withMessage('Email is Required'),
    (0, express_validator_1.body)('password').notEmpty().isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
    }),
    (req, res, next) => {
        const errorValidation = (0, express_validator_1.validationResult)(req);
        if (!errorValidation) {
            console.log(errorValidation);
            return responseHandler_1.default.error(res, 'your data is invalid', 400, errorValidation);
        }
        next();
    },
];
exports.signInValidator = [
    (0, express_validator_1.body)('email').notEmpty().isEmail().withMessage('Email is Required'),
    (0, express_validator_1.body)('password').notEmpty().isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
    }),
    (req, res, next) => {
        const errorValidation = (0, express_validator_1.validationResult)(req);
        if (!errorValidation) {
            console.log(errorValidation);
            return responseHandler_1.default.error(res, 'your data is invalid', 400, errorValidation);
        }
        next();
    },
];
