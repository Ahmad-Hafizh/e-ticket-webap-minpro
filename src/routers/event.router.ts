import { Router } from "express";
import { EventController } from "../controllers/event.controller";
import { createEventValidator } from "../middlewares/eventValidator";
import { verifyToken } from "../middlewares/verifyToken";
import { organizerAuthorization } from "../middlewares/orgAuthor";

export class EventRouter {
  private route: Router;
  private eventController: EventController;

  constructor() {
    this.route = Router();
    this.eventController = new EventController();
    this.initializeRouters();
  }

  private initializeRouters(): void {
    this.route.post(
      "/",
      createEventValidator,
      verifyToken,
      organizerAuthorization,
      this.eventController.createEvent
    );
    this.route.get("/:id", this.eventController.getSpecificEvent);
    this.route.get("/", this.eventController.filterEvent);
    this.route.patch(
      "/:id",
      verifyToken,
      organizerAuthorization,
      this.eventController.updateEvent
    );
    this.route.delete(
      "/:id",
      // verifyToken,
      // organizerAuthorization,
      this.eventController.deleteEvent
    );
  }

  public getRouter(): Router {
    return this.route;
  }
}
