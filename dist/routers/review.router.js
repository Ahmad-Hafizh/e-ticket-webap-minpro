"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRouter = void 0;
const express_1 = require("express");
const review_controller_1 = require("../controllers/review.controller");
class ReviewRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.reviewController = new review_controller_1.ReviewController();
        this.initializeRouters();
    }
    initializeRouters() {
        this.route.get("/:id", this.reviewController.getReview);
        this.route.post("/", 
        // createReviewValidator,
        // verifyToken,
        this.reviewController.generateReview);
    }
    getRouter() {
        return this.route;
    }
}
exports.ReviewRouter = ReviewRouter;
