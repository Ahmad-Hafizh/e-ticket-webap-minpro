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
exports.ReviewController = void 0;
const prisma_1 = require("../config/prisma");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
class ReviewController {
    generateReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { eventId, reviewText, reviewImg, score } = req.body;
                const user = yield prisma_1.prisma.user.findUnique({
                    where: { user_id: res.locals.dcrypt.user_id },
                });
                const checkEventUser = yield prisma_1.prisma.event.findUnique({
                    where: { event_id: eventId },
                });
                if (!user || !checkEventUser) {
                    throw new Error("Unauthorized");
                }
                const response = yield prisma_1.prisma.review.create({
                    data: {
                        event_id: checkEventUser.event_id,
                        user_id: user.user_id,
                        review_text: reviewText,
                        review_img: reviewImg || null,
                        score: score,
                    },
                });
                return responseHandler_1.default.success(res, "Review added! Thank you", 201, response);
            }
            catch (error) {
                return responseHandler_1.default.error(res, "Error adding review", 500, error);
            }
        });
    }
    getReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { eventId } = req.params;
                const response = yield prisma_1.prisma.review.findMany({
                    where: { event_id: parseInt(eventId) },
                });
                return responseHandler_1.default.success(res, "Get review success", 200, response);
            }
            catch (error) {
                return responseHandler_1.default.error(res, "Get review error", 500, error);
            }
        });
    }
}
exports.ReviewController = ReviewController;
