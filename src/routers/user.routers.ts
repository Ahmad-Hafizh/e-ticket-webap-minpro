import { Router } from 'express';
import { UserController } from '../controllers/user.controllers';
// import { createUser } from '../middlewares/createUser';
import { signInValidator, signUpValidator } from '../middlewares/userValidator';
import { verifyToken } from '../middlewares/verifyToken';
import { uploader } from '../middlewares/uploader';
import { organizerAuthorization } from '../middlewares/orgAuthor';

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
    // new users
    this.route.post('/signup', signUpValidator, this.userController.signUp);
    this.route.patch('/add-referral', verifyToken, this.userController.addReferral);
    this.route.get('/verify', verifyToken, this.userController.verifyEmail);

    // sign-in user
    this.route.post('/signin', signInValidator, this.userController.signIn);
    this.route.get('/keep-login', verifyToken, this.userController.keepLogin);

    // update user & profile
    this.route.patch('/update-pfp', verifyToken, uploader('/profile', 'PFP').single('imgProfile'), this.userController.updatePfp);
    this.route.patch('/update-role', verifyToken, this.userController.updateUserRole);
    this.route.patch('/update-profile', verifyToken, this.userController.updateProfile);
    this.route.post('/create-address', verifyToken, this.userController.createAddress);

    // authentication prob
    this.route.post('/forgot-password', this.userController.forgotPassword);
    this.route.patch('/recover-password', verifyToken, this.userController.recoverPassword);
  }

  // returning the routes so it can be use in app by calling it as a method
  public getRouter(): Router {
    return this.route;
  }
}
