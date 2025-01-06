"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRouter = void 0;
const express_1 = require("express");
const verifyToken_1 = require("../middlewares/verifyToken");
const transaction_controller_1 = require("../controllers/transaction.controller");
class TransactionRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.transactionController = new transaction_controller_1.TransactionController();
        this.initializeRoute();
    }
    initializeRoute() {
        // this.route.post(
        //   "/details",
        //   //   verifyToken,
        //   this.transactionController.generateTransactionDetails
        // );
        this.route.post("/:id", verifyToken_1.verifyToken, this.transactionController.generateTransactionAndDetails);
        this.route.get("/details", verifyToken_1.verifyToken, this.transactionController.getTransactionDetails);
        this.route.patch("/:id", verifyToken_1.verifyToken, this.transactionController.paidTransaction);
        // this.route.get(
        //   "/:id",
        //   //   verifyToken,
        //   this.transactionController.getTransactionbyUser
        // );
        // this.route.post(
        //   "/:id",
        //   //   verifyToken,
        //   //   organizerAuthorization,
        //   this.transactionController.getTransactionbyOrganizer
        // );
    }
    getRouter() {
        return this.route;
    }
}
exports.TransactionRouter = TransactionRouter;
