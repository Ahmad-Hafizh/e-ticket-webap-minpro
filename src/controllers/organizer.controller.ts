import { prisma } from '../config/prisma';
import { Request, Response, NextFunction } from 'express';
import ResponseHandler from '../utils/responseHandler';
import { getOrganizerStat } from '../../prisma/generated/client/sql';

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

      const organizerStat = await prisma.$queryRawTyped(getOrganizerStat(range, organizer.organizer_id, start, end));

      return ResponseHandler.success(res, 'Get organizer statistic success', 200, organizerStat);
    } catch (error) {
      return ResponseHandler.error(res, 'Get organizer statistic failed', 500, error);
    }
  }
}
