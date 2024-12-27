import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { UserRouter } from "./routers/user.routers";
import { EventRouter } from "./routers/event.router";
import { ReviewRouter } from "./routers/review.router";
dotenv.config();

const PORT = process.env.PORT || 8080;

class App {
  readonly app: Application;

  constructor() {
    // define to run the method
    this.app = express();
    this.configure();
    this.routes();
  }

  private configure() {
    // cors & express.json config
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes() {
    // define routes
    this.app.get("/", (req: Request, res: Response): any => {
      return res.status(200).send("E-ticket api");
    });

    const userRouter = new UserRouter();
    this.app.use("/users", userRouter.getRouter());

    const eventRouter = new EventRouter();
    this.app.use("/event", eventRouter.getRouter());

    const reviewRouter = new ReviewRouter();
    this.app.use("/review", reviewRouter.getRouter());
  }

  public startServer(): void {
    // run the server
    this.app.listen(PORT, () => {
      console.log("server runs at", PORT);
    });
  }
}

export default new App();
