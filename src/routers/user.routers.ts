import { Router } from 'express';
import { UserController } from '../controllers/user.controllers';
// import { createUser } from '../middlewares/createUser';
import { signInValidator, signUpValidator } from '../middlewares/userValidator';
import { verifyToken } from '../middlewares/verifyToken';
import { uploaderMemory } from '../middlewares/uploader';
import { organizerAuthorization } from '../middlewares/orgAuthor';
import { ProfileController } from '../controllers/profile.controllers';

export class UserRouter {
  private route: Router;
  private userController: UserController;
  private profileController: ProfileController;

  constructor() {
    // router config
    this.route = Router();

    // initialize controller as a class
    // controllers needs to be created new instances to run
    this.userController = new UserController();
    this.profileController = new ProfileController();

    this.initializeRouters();
  }

  private initializeRouters(): void {
    // define every routes from controllers
    // user controller
    this.route.post('/signup', signUpValidator, this.userController.signUp);
    this.route.post('/signin', signInValidator, this.userController.signIn);
    this.route.post('/forgot-password', this.userController.forgotPassword);
    this.route.patch('/add-referral', this.userController.addReferral);

    this.route.use(verifyToken);
    this.route.get('/keep-login', this.userController.keepLogin);
    this.route.get('/verify', this.userController.verifyEmail);
    this.route.patch('/recover-password', this.userController.recoverPassword);
    this.route.patch('/update-role', this.userController.updateUserRole);
    this.route.patch('/update-user', this.userController.updateUser);

    // profile controller
    this.route.get('/profile', this.profileController.getUserProfile);
    this.route.patch('/update-pfp', uploaderMemory().single('imgProfile'), this.profileController.updatePfp);
    this.route.patch('/update-profile', this.profileController.updateProfile);
  }

  // returning the routes so it can be use in app by calling it as a method
  public getRouter(): Router {
    return this.route;
  }
}
