import { prisma } from '../config/prisma';
import { Request, Response, NextFunction } from 'express';
import ResponseHandler from '../utils/responseHandler';
import { Prisma } from '@prisma/client';

interface ITransactionRaw {
  date: string | Date;
  total_revenue: number;
  total_seat: number;
  total_transaction: number;
}

export class OrganizerController {
  async getProfile(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const profile = await prisma.organizer.findUnique({
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
        return ResponseHandler.error(res, 'Organizer not found', 404);
      }

      return ResponseHandler.success(res, 'Get organizer profile success', 200, profile);
    } catch (error) {
      return ResponseHandler.error(res, 'Get organizer profile failed', 500, error);
    }
  }
  async updateProfile(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const profile = await prisma.organizer.findUnique({
        where: { user_id: res.locals.dcrypt.user_id },
      });

      if (!profile) {
        return ResponseHandler.error(res, 'Organizer not found', 404);
      }

      await prisma.organizer.update({
        where: {
          organizer_id: profile.organizer_id,
        },
        data: {
          ...req.body,
        },
      });
      return ResponseHandler.success(res, 'Update organizer profile success', 201);
    } catch (error) {
      return ResponseHandler.error(res, 'Update organizer profile failed', 500, error);
    }
  }
  async updateBank(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const bank_account = await prisma.organizer.findUnique({
        where: { user_id: res.locals.dcrypt.user_id },
        select: {
          bank_account: true,
        },
      });

      if (!bank_account) {
        return ResponseHandler.error(res, 'Bank account not found', 404);
      }

      await prisma.bank_account.update({
        where: {
          bank_account_id: bank_account.bank_account?.bank_account_id,
        },
        data: {
          ...req.body,
        },
      });

      return ResponseHandler.error(res, 'Update Bank account success', 201);
    } catch (error) {
      return ResponseHandler.error(res, 'Update Bank account failed', 500, error);
    }
  }
  async getStat(req: Request, res: Response): Promise<any> {
    try {
      const { start, end, range } = req.body;
      console.log(start, end, range);

      const organizer = await prisma.organizer.findUnique({
        where: {
          user_id: res.locals.dcrypt.user_id,
        },
      });
      console.log(organizer);

      if (!organizer) {
        return ResponseHandler.error(res, 'Organizer not found', 404);
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

      const query = Prisma.sql`select date_trunc(${range}, t."createdAt")::date as date, sum(t.total_amount)::numeric as total_revenue, sum(td.quantity_bought)::numeric as total_seat, count(t.transaction_id)::numeric as total_transaction from "transaction" t join transaction_detail td on t.transaction_details_id = td.transaction_details_id  join "event" e on td.event_id =e.event_id where e.organizer_id = ${organizer.organizer_id} and t."createdAt"::date between ${start}::date and ${end}::date group by date`;

      const transactionRaw = await prisma.$queryRaw<ITransactionRaw[]>(query);
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

      return ResponseHandler.success(res, 'Get organizer statistic success', 200, transactionRaw);
    } catch (error) {
      return ResponseHandler.error(res, 'Get organizer statistic failed', 500, error);
    }
  }
}
