import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma";
import ResponseHandler from "../utils/responseHandler";

export class ReviewController {
  async generateReview(req: Request, res: Response): Promise<any> {
    try {
      const { eventId, reviewText, reviewImg, score } = req.body;
      const user = await prisma.user.findUnique({
        where: { user_id: res.locals.dcrypt.user_id },
      });
      const checkEventUser = await prisma.event.findUnique({
        where: { event_id: eventId },
      });

      if (!user || !checkEventUser) {
        throw new Error("Unauthorized");
      }
      const response = await prisma.review.create({
        data: {
          event_id: checkEventUser.event_id,
          user_id: user.user_id,
          review_text: reviewText,
          review_img: reviewImg || null,
          score: score,
        },
      });
      return ResponseHandler.success(
        res,
        "Review added! Thank you",
        201,
        response
      );
    } catch (error) {
      return ResponseHandler.error(res, "Error adding review", 500, error);
    }
  }

  async getReview(req: Request, res: Response) {
    try {
      const { event } = req.query;
    } catch (error) {}
  }
}
