"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
const verifyToken = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            return responseHandler_1.default.error(res, 'token not exist', 404);
        }
        const checkToken = (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_KEY || 'secretkey');
        res.locals.dcrypt = checkToken;
        next();
    }
    catch (error) {
        return responseHandler_1.default.error(res, 'verification is failed', 500, error);
    }
};
exports.verifyToken = verifyToken;
