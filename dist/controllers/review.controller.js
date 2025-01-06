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
                const { eventId, reviewContent, reviewImage, reviewScore } = req.body;
                const userId = res.locals.dcrypt.user_id;
                const reviewTransaction = yield prisma_1.prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    // const user = await tx.user.findUnique({
                    //   where: { user_id: res.locals.dcrypt.user_id },
                    // });
                    const user = yield tx.user.findUnique({
                        where: { user_id: userId },
                    });
                    const checkEventUser = yield tx.event.findUnique({
                        where: { event_id: eventId },
                    });
                    if (!user || !checkEventUser) {
                        throw new Error("Unauthorized");
                    }
                    const response = yield tx.review.create({
                        data: {
                            event_id: checkEventUser.event_id,
                            user_id: user.user_id,
                            review_text: reviewContent,
                            review_img: reviewImage || null || "",
                            score: parseInt(reviewScore),
                        },
                    });
                    const allReview = yield tx.review.findMany({
                        where: { event_id: eventId },
                    });
                    const totalScore = allReview.reduce((acc, curr) => acc + curr.score, 0);
                    const averageScore = totalScore / allReview.length;
                    const updateEvent = yield tx.event.update({
                        where: { event_id: eventId },
                        data: { score: averageScore },
                    });
                    return response;
                }));
                return responseHandler_1.default.success(res, "Review added! Thank you", 201, reviewTransaction);
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
