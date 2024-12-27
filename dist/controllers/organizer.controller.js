'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrganizerController = void 0;
const prisma_1 = require('../config/prisma');
const responseHandler_1 = __importDefault(require('../utils/responseHandler'));
const client_1 = require('@prisma/client');
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
      } catch (error) {
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
      } catch (error) {
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
      } catch (error) {
        return responseHandler_1.default.error(res, 'Update Bank account failed', 500, error);
      }
    });
  }
  getStat(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const { start, end, range } = req.body;
        console.log(start, end, range);
        const organizer = yield prisma_1.prisma.organizer.findUnique({
          where: {
            user_id: res.locals.dcrypt.user_id,
          },
        });
        console.log(organizer);
        if (!organizer) {
          return responseHandler_1.default.error(res, 'Organizer not found', 404);
        }
        // const stat = await prisma.$transaction(async (tx) => {
        // const revenue: { total: number; data: { date: string; total: number }[] } = {
        //   total: 0,
        //   data: [],
        // };
        // const seat: { total: number; data: { date: string; total: number }[] } = {
        //   total: 0,
        //   data: [],
        // };
        // const transaction: { total: number; data: { date: string; total: number }[] } = {
        //   total: 0,
        //   data: [],
        // };
        // const query = ;
        const transactionRaw = yield prisma_1.prisma.$queryRaw(
          client_1.Prisma
            .sql`select date_trunc(${range}, t."createdAt")::date as date, sum(t.total_amount)::numeric as total_revenue, sum(td.quantity_bought)::numeric as total_seat, count(t.transaction_id)::numeric as total_transaction from "transaction" t join transaction_detail td on t.transaction_details_id = td.transaction_details_id  join "event" e on td.event_id =e.event_id where e.organizer_id = ${organizer.organizer_id} and t."createdAt"::date between ${start}::date and ${end}::date group by date`
        );
        console.log(transactionRaw);
        // const transactionData: any[] = transactionRaw.map((e) => {
        //   e.total_revenue = parseInt(e.total_revenue);
        //   e.total_seat = parseInt(e.total_seat);
        //   e.total_transaction = parseInt(e.total_transaction);
        //   e.date = new Date(e.date).toLocaleString(undefined, { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' });
        // // revenue destructuring
        // revenue.total += e.total_revenue;
        // revenue.data.push({ date: e.date, total: e.total_revenue });
        // // seat destructuring
        // seat.total += e.total_seat;
        // seat.data.push({ date: e.date, total: e.total_seat });
        // // transaction destructuring
        // transaction.total += e.total_transaction;
        // transaction.data.push({ date: e.date, total: e.total_transaction });
        //   return e;
        // });
        // console.log(revenue, seat, transaction);
        // return { revenue, seat, transaction };
        // });
        // console.log(transactionData);
        return responseHandler_1.default.success(res, 'Get organizer statistic success', 200, transactionRaw);
      } catch (error) {
        return responseHandler_1.default.error(res, 'Get organizer statistic failed', 500, error);
      }
    });
  }
}
exports.OrganizerController = OrganizerController;
