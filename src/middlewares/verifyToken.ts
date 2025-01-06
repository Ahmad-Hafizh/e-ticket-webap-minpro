import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import ResponseHandler from '../utils/responseHandler';
import { prisma } from '../config/prisma';

export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return ResponseHandler.error(res, 'token not exist', 404);
    }

    const checkToken: any = verify(token, process.env.TOKEN_KEY || 'secretkey');

    const isUserExist = await prisma.user.findUnique({
      where: { user_id: checkToken.user_id, email: checkToken.email },
    });

    if (!isUserExist) {
      return ResponseHandler.error(res, 'account not exist', 404);
    }

    res.locals.user = isUserExist;
    res.locals.dcrypt = checkToken;
    next();
  } catch (error) {
    return ResponseHandler.error(res, 'verification is failed', 500, error);
  }
};
