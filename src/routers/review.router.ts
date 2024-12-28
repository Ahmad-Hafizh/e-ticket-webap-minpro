import { Router } from "express";
import { ReviewController } from "../controllers/review.controller";
import { verifyToken } from "../middlewares/verifyToken";
import { organizerAuthorization } from "../middlewares/orgAuthor";
import { createReviewValidator } from "../middlewares/reviewValidator";

export class ReviewRouter {
  private route: Router;
  private reviewController: ReviewController;

  constructor() {
    this.route = Router();
    this.reviewController = new ReviewController();
    this.initializeRouters();
  }

  private initializeRouters(): void {
    this.route.get("/:id", this.reviewController.getReview);
    this.route.post(
      "/",
      // createReviewValidator,
      // verifyToken,
      this.reviewController.generateReview
    );
  }

  public getRouter(): Router {
    return this.route;
  }
}
