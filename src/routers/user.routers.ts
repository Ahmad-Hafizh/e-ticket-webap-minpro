import { Router } from 'express';
import { UserController } from '../controllers/user.controllers';
import { createUser } from '../middlewares/createUser';

export class UserRouter {
  private route: Router;
  private userController: UserController;

  constructor() {
    // router config
    this.route = Router();

    // initialize controller as a class
    // controllers needs to be created new instances to run
    this.userController = new UserController();

    this.initializeRouters();
  }

  private initializeRouters(): void {
    // define every routes from controllers
    this.route.post('/signup', createUser, this.userController.signUp);
    this.route.post('/verify/:token', this.userController.verifyEmail);
  }

  // returning the routes so it can be use in app by calling it as a method
  public getRouter(): Router {
    return this.route;
  }
}
