import { Router } from "express";
import { OrganizerController } from "../controllers/organizer.controller";
import { verifyToken } from "../middlewares/verifyToken";
import { organizerAuthorization } from "../middlewares/orgAuthor";
import { TransactionController } from "../controllers/transaction.controller";
import { uploaderMemory } from "../middlewares/uploader";

export class TransactionRouter {
  private route: Router;
  private transactionController: TransactionController;

  constructor() {
    this.route = Router();
    this.transactionController = new TransactionController();
    this.initializeRoute();
  }

  private initializeRoute() {
    // this.route.post(
    //   "/details",
    //   //   verifyToken,
    //   this.transactionController.generateTransactionDetails
    // );

    this.route.post(
      "/proof",
      uploaderMemory().single("proofOfPayment"),
      verifyToken,
      this.transactionController.generateProofPayment
    );

    this.route.post(
      "/:id",
      verifyToken,
      this.transactionController.generateTransactionAndDetails
    );

    this.route.patch(
      "/:id",
      verifyToken,
      this.transactionController.paidTransaction
    );

    // this.route.get(
    //   "/details",
    //   verifyToken,
    //   this.transactionController.getTransactionDetails
    // );

    this.route.get(
      "/user",
      verifyToken,
      this.transactionController.getTransactionbyUser
    );

    this.route.get(
      "/organizer",
      verifyToken,
      organizerAuthorization,
      this.transactionController.getTransactionbyOrganizer
    );
  }

  public getRouter(): Router {
    return this.route;
  }
}
