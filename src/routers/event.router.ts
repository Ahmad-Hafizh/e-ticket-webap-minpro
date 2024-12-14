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
    this.route.post("/", this.eventController.createEvent);
    this.route.get("/:id", this.eventController.getSpecificEvent);
    this.route.patch("/:id", this.eventController.updateEvent);
    this.route.delete("/:id", this.eventController.deleteEvent);
  }

  public getRouter(): Router {
    return this.route;
  }
}
