import { Request, Response, NextFunction } from 'express';
import ResponseHandler from '../utils/responseHandler';

export const userAuthorization = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const token = res.locals.dcrypt;

    if (token) {
      return ResponseHandler.error(res, 'Token is not found', 404);
    }

    if (!token.isVerified) {
      return ResponseHandler.error(res, 'Please verify your account', 401);
    }

    next();
  } catch (error) {
    return ResponseHandler.error(res, 'Authentication failed', 500, error);
  }
};
