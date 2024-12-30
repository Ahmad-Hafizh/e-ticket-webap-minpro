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
exports.organizerAuthorization = void 0;
// import { prisma } from '../config/prisma';
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
const organizerAuthorization = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = res.locals.dcrypt;
        if (token.role != "organizer") {
            return responseHandler_1.default.error(res, "Access is not granted", 403);
        }
        else if (token.role === "organizer") {
            next();
        }
        // const findUser = await prisma.user.findUnique({
        //   where: {
        //     email: token.email,
        //     user_id: token.user_id,
        //   },
        // });
        // if (!findUser) {
        //   return ResponseHandler.error(res, 'Account not found', 404);
        // }
        // if (findUser.role != 'organizer') {
        //   return ResponseHandler.error(res, 'Access is not granted', 403);
        // } else if (findUser.role === 'organizer') {
        //   next();
        // }
    }
    catch (error) {
        return responseHandler_1.default.error(res, "Authorization Error", 500, error);
    }
});
exports.organizerAuthorization = organizerAuthorization;
