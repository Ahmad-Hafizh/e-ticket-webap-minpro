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
exports.OrganizerController = void 0;
const prisma_1 = require("../config/prisma");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
const sql_1 = require("../../prisma/generated/client/sql");
class OrganizerController {
    getProfile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield prisma_1.prisma.organizer.findUnique({
                    where: {
                        user_id: res.locals.dcrypt.user_id,
                    },
                    include: {
                        bank_account: {
                            select: {
                                bank_name: true,
                                bank_account_name: true,
                                bank_account_number: true,
                            },
                        },
                    },
                });
                if (!profile) {
                    return responseHandler_1.default.error(res, 'Organizer not found', 404);
                }
                return responseHandler_1.default.success(res, 'Get organizer profile success', 200, profile);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'Get organizer profile failed', 500, error);
            }
        });
    }
    updateProfile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profile = yield prisma_1.prisma.organizer.findUnique({
                    where: { user_id: res.locals.dcrypt.user_id },
                });
                if (!profile) {
                    return responseHandler_1.default.error(res, 'Organizer not found', 404);
                }
                yield prisma_1.prisma.organizer.update({
                    where: {
                        organizer_id: profile.organizer_id,
                    },
                    data: Object.assign({}, req.body),
                });
                return responseHandler_1.default.success(res, 'Update organizer profile success', 201);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'Update organizer profile failed', 500, error);
            }
        });
    }
    updateBank(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const bank_account = yield prisma_1.prisma.organizer.findUnique({
                    where: { user_id: res.locals.dcrypt.user_id },
                    select: {
                        bank_account: true,
                    },
                });
                if (!bank_account) {
                    return responseHandler_1.default.error(res, 'Bank account not found', 404);
                }
                yield prisma_1.prisma.bank_account.update({
                    where: {
                        bank_account_id: (_a = bank_account.bank_account) === null || _a === void 0 ? void 0 : _a.bank_account_id,
                    },
                    data: Object.assign({}, req.body),
                });
                return responseHandler_1.default.error(res, 'Update Bank account success', 201);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'Update Bank account failed', 500, error);
            }
        });
    }
    getStat(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { start, end, range } = req.body;
                const organizer = yield prisma_1.prisma.organizer.findUnique({
                    where: {
                        user_id: res.locals.dcrypt.user_id,
                    },
                });
                if (!organizer) {
                    return responseHandler_1.default.error(res, 'Organizer not found', 404);
                }
                const organizerStat = yield prisma_1.prisma.$queryRawTyped((0, sql_1.getOrganizerStat)(range, organizer.organizer_id, start, end));
                return responseHandler_1.default.success(res, 'Get organizer statistic success', 200, organizerStat);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'Get organizer statistic failed', 500, error);
            }
        });
    }
}
exports.OrganizerController = OrganizerController;
