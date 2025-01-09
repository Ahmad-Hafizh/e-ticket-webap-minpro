import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma";
import ResponseHandler from "../utils/responseHandler";

export class RewardsController {
  async getUserCoupon(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user = res.locals.user;
      const today = new Date();
      const coupons = await prisma.coupon.findMany({
        where: {
          user_id: user.user_id,
          isActive: true,
          expired_date: {
            gte: today,
          },
        },
        orderBy: {
          expired_date: "asc",
        },
      });

      return ResponseHandler.success(res, "get coupon success", 200, coupons);
    } catch (error) {
      return ResponseHandler.error(res, "get coupon failed", 500);
    }
  }
  async getUserPoint(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user = res.locals.user;
      const today = new Date();
      const points = await prisma.point.findMany({
        where: {
          user_id: user.user_id,
          expired_date: {
            gte: today,
          },
        },
      });

      return ResponseHandler.success(res, "get coupon success", 200, points);
    } catch (error) {
      return ResponseHandler.error(res, "get point failed", 500);
    }
  }

  async useCoupon(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user = res.locals.user;
      const usedCoupon = await prisma.coupon.update({
        where: {
          coupon_id: req.body.coupon_id,
          user_id: user.user_id,
        },
        data: {
          isActive: false,
        },
      });
      return ResponseHandler.success(res, "use coupon success", 200);
    } catch (error) {
      return ResponseHandler.error(res, "use coupon failed", 500);
    }
  }

  async restoreCoupon(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user = res.locals.user;
      const today = new Date();
      const usedCoupon = await prisma.coupon.update({
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
      return ResponseHandler.success(res, "restore coupon success", 200);
    } catch (error) {
      return ResponseHandler.error(res, "restore coupon failed", 500);
    }
  }

  async getPointsByPrice(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user = res.locals.user;
      const today = new Date();
      const points = await prisma.point.findMany({
        where: {
          user_id: user.user_id,
          expired_date: { gte: today },
          amount: {
            lte: parseInt(req.body.transactionAmount),
          },
        },
      });
      const usePointId: any = [];
      const fixPointAmount = points.reduce((c, e) => {
        const transactionAmount = parseInt(req.body.transactionAmount);
        if (c + e.amount <= transactionAmount) {
          usePointId.push(e);
        }
        return c + e.amount <= transactionAmount ? c + e.amount : c;
      }, 0);

      // usePointId.forEach(async (e: any) => {
      //   const usedPoints = await prisma.point.update({
      //     where: {
      //       point_id: e.point_id,
      //     },
      //     data: {
      //       isActive: false,
      //     },
      //   });
      // });

      return ResponseHandler.success(res, "use point success", 200, {
        point_pay: fixPointAmount,
        points_id: usePointId,
      });
    } catch (error) {
      return ResponseHandler.error(res, "use point failed", 500);
    }
  }
  async restorePoint(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user = res.locals.user;
      const points_id = req.body.points_id;

      points_id.forEach(async (e: any | number) => {
        const usedPoints = await prisma.point.update({
          where: {
            point_id: e.point_id,
            expired_date: {
              gte: new Date(),
            },
          },
          data: {
            isActive: true,
          },
        });
      });
    } catch (error) {
      return ResponseHandler.error(res, "restore point failed", 500);
    }
  }

  async getReferred(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const user = res.locals.user;
      const referral = await prisma.referral.findUnique({
        where: { user_id: user.user_id },
      });

      const referred = await prisma.user.findMany({
        select: {
          pfp_url: true,
          name: true,
          email: true,
        },
        where: { referred_id: referral?.referral_id },
      });

      return ResponseHandler.success(res, "get referral success", 200, {
        referred,
        referralCode: referral?.referral_code,
      });
    } catch (error) {
      return ResponseHandler.error(res, "get referral failed", 500);
    }
  }
}
