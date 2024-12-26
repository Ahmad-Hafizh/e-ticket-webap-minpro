import { Router } from 'express';
import { OrganizerController } from '../controllers/organizer.controller';
import { verifyToken } from '../middlewares/verifyToken';
import { organizerAuthorization } from '../middlewares/orgAuthor';

export class OrganizerRouter {
  private route: Router;
  private organizerController: OrganizerController;

  constructor() {
    this.route = Router();
    this.organizerController = new OrganizerController();
    this.initializeRoute();
  }

  private initializeRoute() {
    this.route.get('/', verifyToken, organizerAuthorization, this.organizerController.getProfile);
    this.route.patch('/update-profile', verifyToken, organizerAuthorization, this.organizerController.updateProfile);
    this.route.patch('/update-bank', verifyToken, organizerAuthorization, this.organizerController.updateBank);
    this.route.post('/stat', verifyToken, organizerAuthorization, this.organizerController.getStat);
  }

  public getRouter(): Router {
    return this.route;
  }
}
