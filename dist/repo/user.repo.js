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
const prisma_1 = require("../config/prisma");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
class userRepo {
    checkIsUserExist(userToken, res, errMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUserExist = yield prisma_1.prisma.user.findUnique({
                where: { user_id: userToken.user_id, email: userToken.email },
            });
            if (!isUserExist) {
                return responseHandler_1.default.error(res, 'account not exist', 404);
            }
            return isUserExist;
        });
    }
}
exports.default = new userRepo();
