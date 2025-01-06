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
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
const prisma_1 = require("../config/prisma");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token) {
            return responseHandler_1.default.error(res, 'token not exist', 404);
        }
        const checkToken = (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_KEY || 'secretkey');
        const isUserExist = yield prisma_1.prisma.user.findUnique({
            where: { user_id: checkToken.user_id, email: checkToken.email },
        });
        if (!isUserExist) {
            return responseHandler_1.default.error(res, 'account not exist', 404);
        }
        res.locals.user = isUserExist;
        res.locals.dcrypt = checkToken;
        next();
    }
    catch (error) {
        return responseHandler_1.default.error(res, 'verification is failed', 500, error);
    }
});
exports.verifyToken = verifyToken;
