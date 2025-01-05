import { Router } from "express";
import { EventController } from "../controllers/event.controller";
import { createEventValidator } from "../middlewares/eventValidator";
import { verifyToken } from "../middlewares/verifyToken";
import { organizerAuthorization } from "../middlewares/orgAuthor";
import { SearchController } from "../controllers/search.controller";

export class SearchRouter {
  private route: Router;
  private searchController: SearchController;

  constructor() {
    this.route = Router();
    this.searchController = new SearchController();
    this.initializeRouters();
  }

  private initializeRouters(): void {
    this.route.get("/", this.searchController.filterEvent);
  }

  public getRouter(): Router {
    return this.route;
  }
}
