"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRouter = void 0;
const express_1 = require("express");
const review_controller_1 = require("../controllers/review.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
const reviewValidator_1 = require("../middlewares/reviewValidator");
class ReviewRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.reviewController = new review_controller_1.ReviewController();
        this.initializeRouters();
    }
    initializeRouters() {
        this.route.get("/:id", this.reviewController.getReview);
        this.route.post("/", reviewValidator_1.createReviewValidator, verifyToken_1.verifyToken, this.reviewController.generateReview);
    }
    getRouter() {
        return this.route;
    }
}
exports.ReviewRouter = ReviewRouter;
