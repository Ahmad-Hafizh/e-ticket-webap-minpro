import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import ResponseHandler from "../utils/responseHandler";

export const createReviewValidator: any = [
  body("reviewTitle").notEmpty().withMessage("Event title cannot be empty!"),

  (req: Request, res: Response, next: NextFunction) => {
    const errorValidation = validationResult(req);
    if (!errorValidation) {
      console.log(errorValidation);
      return ResponseHandler.error(
        res,
        "your data is invalid",
        400,
        errorValidation
      );
    }
    next();
  },
];
