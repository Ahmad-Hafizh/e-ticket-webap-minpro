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
exports.userAuthorization = void 0;
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
const userAuthorization = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = res.locals.dcrypt;
        if (!token) {
            return responseHandler_1.default.error(res, 'Token is not found', 404);
        }
        if (!token.isVerified) {
            return responseHandler_1.default.error(res, 'Please verify your account', 401);
        }
        next();
    }
    catch (error) {
        return responseHandler_1.default.error(res, 'Authentication failed', 500, error);
    }
});
exports.userAuthorization = userAuthorization;
