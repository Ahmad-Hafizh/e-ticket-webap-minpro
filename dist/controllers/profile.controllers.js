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
exports.ProfileController = void 0;
const prisma_1 = require("../config/prisma");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
const cloudinary_1 = require("../config/cloudinary");
class ProfileController {
    getUserProfile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = res.locals.user;
                const profile = yield prisma_1.prisma.profile.findUnique({
                    where: { user_id: user.user_id },
                });
                return responseHandler_1.default.success(res, 'get user profile success', 200, profile);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'get user profile failed', 500, error);
            }
        });
    }
    updatePfp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.file) {
                    return responseHandler_1.default.error(res, 'Image not available', 404);
                }
                const user = res.locals.user;
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, 'profile');
                const updatedUser = yield prisma_1.prisma.user.update({
                    where: { user_id: user.user_id },
                    data: { pfp_url: secure_url },
                });
                return responseHandler_1.default.success(res, 'update profile picture is success', 201, secure_url);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'update profile picture is failed', 500, error);
            }
        });
    }
    updateProfile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = res.locals.user;
                const profile = yield prisma_1.prisma.profile.update({
                    where: { user_id: user.user_id },
                    data: Object.assign({}, req.body),
                });
                return responseHandler_1.default.success(res, 'update profile is success', 201, profile);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'update profile is failed', 500, error);
            }
        });
    }
}
exports.ProfileController = ProfileController;
