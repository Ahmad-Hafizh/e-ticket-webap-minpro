import { Router } from 'express';
import { EventController } from '../controllers/event.controller';
import { createEventValidator } from '../middlewares/eventValidator';
import { verifyToken } from '../middlewares/verifyToken';
import { organizerAuthorization } from '../middlewares/orgAuthor';

export class EventRouter {
  private route: Router;
  private eventController: EventController;

  constructor() {
    this.route = Router();
    this.eventController = new EventController();
    this.initializeRouters();
  }

  private initializeRouters() {
    this.route.get('/', this.eventController.getEventMainPage);

    this.route.get('/all', this.eventController.getAllEvent);
    this.route.post('/', createEventValidator, verifyToken, organizerAuthorization, this.eventController.createEvent);
    this.route.get('/location', this.eventController.getEventLocation);
    this.route.get('/:title', this.eventController.getSpecificEvent);

    this.route.patch('/:id', verifyToken, organizerAuthorization, this.eventController.updateEvent);
    this.route.delete(
      '/:id',
      // verifyToken,
      // organizerAuthorization,
      this.eventController.deleteEvent
    );
  }

  public getRouter(): Router {
    return this.route;
  }
}
