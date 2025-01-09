import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma";
import ResponseHandler from "../utils/responseHandler";

class Rewards {
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
  async usePoint(
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

      usePointId.forEach(async (e: any) => {
        const usedPoints = await prisma.point.delete({
          where: {
            point_id: e.point_id,
          },
        });
      });

      return ResponseHandler.success(res, "use point success", 200);
    } catch (error) {
      return ResponseHandler.error(res, "use point failed", 500);
    }
  }
}
