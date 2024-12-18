import { Request, Response, NextFunction } from "express";
// import { prisma } from '../config/prisma';
import ResponseHandler from "../utils/responseHandler";

export const organizerAuthorization = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const token = res.locals.dcrypt;

    if (token.role != "organizer") {
      return ResponseHandler.error(res, "Access is not granted", 403);
    } else if (token.role === "organizer") {
      next();
    }
    // const findUser = await prisma.user.findUnique({
    //   where: {
    //     email: token.email,
    //     user_id: token.user_id,
    //   },
    // });

    // if (!findUser) {
    //   return ResponseHandler.error(res, 'Account not found', 404);
    // }

    // if (findUser.role != 'organizer') {
    //   return ResponseHandler.error(res, 'Access is not granted', 403);
    // } else if (findUser.role === 'organizer') {
    //   next();
    // }
  } catch (error) {
    return ResponseHandler.error(res, "Authorization Error", 500, error);
  }
};
