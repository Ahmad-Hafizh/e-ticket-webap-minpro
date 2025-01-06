import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma";
import ResponseHandler from "../utils/responseHandler";

export class ReviewController {
  async generateReview(req: Request, res: Response): Promise<any> {
    try {
      const { eventId, reviewContent, reviewImage, reviewScore } = req.body;
      const userId = res.locals.dcrypt.user_id;
      const reviewTransaction = await prisma.$transaction(async (tx) => {
        // const user = await tx.user.findUnique({
        //   where: { user_id: res.locals.dcrypt.user_id },
        // });
        const user = await tx.user.findUnique({
          where: { user_id: userId },
        });

        const checkEventUser = await tx.event.findUnique({
          where: { event_id: eventId },
        });

        if (!user || !checkEventUser) {
          throw new Error("Unauthorized");
        }
        const response = await tx.review.create({
          data: {
            event_id: checkEventUser.event_id,
            user_id: user.user_id,
            review_text: reviewContent,
            review_img: reviewImage || null || "",
            score: parseInt(reviewScore),
          },
        });

        const allReview = await tx.review.findMany({
          where: { event_id: eventId },
        });

        const totalScore = allReview.reduce((acc, curr) => acc + curr.score, 0);
        const averageScore = totalScore / allReview.length;

        const updateEvent = await tx.event.update({
          where: { event_id: eventId },
          data: { score: averageScore },
        });

        return response;
      });

      return ResponseHandler.success(
        res,
        "Review added! Thank you",
        201,
        reviewTransaction
      );
    } catch (error) {
      return ResponseHandler.error(res, "Error adding review", 500, error);
    }
  }

  async getReview(req: Request, res: Response): Promise<any> {
    try {
      const { eventId } = req.params;

      const response = await prisma.review.findMany({
        where: { event_id: parseInt(eventId as string) },
      });
      return ResponseHandler.success(res, "Get review success", 200, response);
    } catch (error) {
      return ResponseHandler.error(res, "Get review error", 500, error);
    }
  }
}
