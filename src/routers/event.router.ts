import { Router } from "express";
import { EventController } from "../controllers/event.controller";

export class EventRouter {
  private route: Router;
  private eventController: EventController;

  constructor() {
    this.route = Router();
    this.eventController = new EventController();
    this.initializeRouters();
  }

  private initializeRouters(): void {
    this.route.post("/create", this.eventController.createEvent);
  }

  public getRouter(): Router {
    return this.route;
  }
}
