import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { hashPassword } from '../utils/hashPassword';
import ResponseHandler from '../utils/responseHandler';

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    // checking if user already exist
    const isUserExist = await prisma.user.findUnique({
      where: { email: req.body.email },
    });

    // if user already exist return response error rc 404
    if (isUserExist) {
      return ResponseHandler.error(res, 'email is already used', 404);
    }

    // check if refferal code is available
    if (req.query.referred_code) {
      // find referral data
      const findReferral = await prisma.referral.findUnique({
        where: { referral_code: req.query.referred_code.toString() },
      });

      // check if referral data is available
      if (!findReferral) {
        return ResponseHandler.error(res, 'referral not found', 404);
      }

      // creating user data
      const user = await prisma.user.create({
        data: { ...req.body, password: await hashPassword(req.body.password), referred_id: findReferral?.referral_id },
      });

      // define expired date for the point
      const expired_date = new Date();
      expired_date.setMonth(expired_date.getMonth() + 3);
      //adding 10,000 point to the referrer point wallet
      await prisma.point.create({
        data: { user_id: findReferral.user_id, amount: 10000, expired_date },
      });

      await prisma.coupon.create({
        data: {
          coupon_name: 'Referral Coupon',
          user_id: user.user_id,
          coupon_code: Math.round(Math.random() * 10000).toString(),
          discount: 10,
          expired_date,
        },
      });

      // passing data to the next controller
      res.locals.user = user;
    } else {
      // if there is no referral code available
      const user = await prisma.user.create({
        data: { ...req.body, password: req.body.password },
      });

      // passing data to the next controller
      res.locals.user = user;
    }

    next();
  } catch (error) {
    return ResponseHandler.error(res, 'sign up is failed', 500, error);
  }
};
