import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import ResponseHandler from '../utils/responseHandler';

export const signUpValidator: any = [
  body('name').notEmpty(),
  body('email').notEmpty().isEmail().withMessage('Email is Required'),
  body('password').notEmpty().isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 0,
    minNumbers: 1,
    minSymbols: 0,
  }),
  (req: Request, res: Response, next: NextFunction) => {
    const errorValidation = validationResult(req);
    if (!errorValidation.isEmpty()) {
      console.log(errorValidation);
      return ResponseHandler.error(res, 'your data is invalid', 400, errorValidation);
    }
    next();
  },
];

export const signInValidator: any = [
  body('email').notEmpty().isEmail().withMessage('Email is Required'),
  body('password').notEmpty().isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 0,
    minNumbers: 1,
    minSymbols: 0,
  }),
  (req: Request, res: Response, next: NextFunction) => {
    const errorValidation = validationResult(req);
    if (!errorValidation.isEmpty()) {
      console.log(errorValidation);
      return ResponseHandler.error(res, 'your data is invalid', 400, errorValidation);
    }
    next();
  },
];
