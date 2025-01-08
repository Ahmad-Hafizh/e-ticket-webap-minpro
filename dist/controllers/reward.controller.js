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
class Rewards {
    getUserCoupon(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = res.locals.user;
                const today = new Date();
                const coupons = yield prisma_1.prisma.coupon.findMany({
                    where: {
                        user_id: user.user_id,
                        isActive: true,
                        expired_date: {
                            gte: today,
                        },
                    },
                    orderBy: {
                        expired_date: 'asc',
                    },
                });
                return responseHandler_1.default.success(res, 'get coupon success', 200, coupons);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'get coupon failed', 500);
            }
        });
    }
    getUserPoint(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = res.locals.user;
                const today = new Date();
                const points = yield prisma_1.prisma.point.findMany({
                    where: {
                        user_id: user.user_id,
                        expired_date: {
                            gte: today,
                        },
                    },
                });
                return responseHandler_1.default.success(res, 'get coupon success', 200, points);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'get point failed', 500);
            }
        });
    }
    useCoupon(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = res.locals.user;
                const usedCoupon = yield prisma_1.prisma.coupon.update({
                    where: {
                        coupon_id: req.body.coupon_id,
                        user_id: user.user_id,
                    },
                    data: {
                        isActive: false,
                    },
                });
                return responseHandler_1.default.success(res, 'use coupon success', 200);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'use coupon failed', 500);
            }
        });
    }
    restoreCoupon(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = res.locals.user;
                const today = new Date();
                const usedCoupon = yield prisma_1.prisma.coupon.update({
                    where: {
                        coupon_id: req.body.coupon_id,
                        user_id: user.user_id,
                        expired_date: {
                            gte: today,
                        },
                    },
                    data: {
                        isActive: true,
                    },
                });
                return responseHandler_1.default.success(res, 'restore coupon success', 200);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'restore coupon failed', 500);
            }
        });
    }
    usePoint(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = res.locals.user;
                const today = new Date();
                const points = yield prisma_1.prisma.point.findMany({
                    where: {
                        user_id: user.user_id,
                        expired_date: { gte: today },
                        amount: {
                            lte: parseInt(req.body.transactionAmount),
                        },
                    },
                });
                const usePointId = [];
                const fixPointAmount = points.reduce((c, e) => {
                    const transactionAmount = parseInt(req.body.transactionAmount);
                    if (c + e.amount <= transactionAmount) {
                        usePointId.push(e);
                    }
                    return c + e.amount <= transactionAmount ? c + e.amount : c;
                }, 0);
                usePointId.forEach((e) => __awaiter(this, void 0, void 0, function* () {
                    const usedPoints = yield prisma_1.prisma.point.delete({
                        where: {
                            point_id: e.point_id,
                        },
                    });
                }));
                return responseHandler_1.default.success(res, 'use point success', 200);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'use point failed', 500);
            }
        });
    }
}