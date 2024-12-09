import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import ResponseHandler from '../utils/responseHandler';

export const verifyToken = (req: Request, res: Response, next: NextFunction): any => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return ResponseHandler.error(res, 'token not exist', 404);
    }

    const checkToken: any = verify(token, process.env.TOKEN_KEY || 'secretkey');

    res.locals.dcrypt = checkToken;
    next();
  } catch (error) {
    return ResponseHandler.error(res, 'verification is failed', 500, error);
  }
};
