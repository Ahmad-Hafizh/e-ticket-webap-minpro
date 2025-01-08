"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
// import { createUser } from '../middlewares/createUser';
const userValidator_1 = require("../middlewares/userValidator");
const verifyToken_1 = require("../middlewares/verifyToken");
const uploader_1 = require("../middlewares/uploader");
const profile_controllers_1 = require("../controllers/profile.controllers");
const reward_controller_1 = require("../controllers/reward.controller");
class UserRouter {
    constructor() {
        // router config
        this.route = (0, express_1.Router)();
        // initialize controller as a class
        // controllers needs to be created new instances to run
        this.userController = new user_controllers_1.UserController();
        this.profileController = new profile_controllers_1.ProfileController();
        this.rewardsController = new reward_controller_1.RewardsController();
        this.initializeRouters();
    }
    initializeRouters() {
        // define every routes from controllers
        // user controller
        this.route.post('/signup', userValidator_1.signUpValidator, this.userController.signUp);
        this.route.post('/signin', userValidator_1.signInValidator, this.userController.signIn);
        this.route.post('/forgot-password', this.userController.forgotPassword);
        this.route.patch('/add-referral', this.userController.addReferral);
        this.route.use(verifyToken_1.verifyToken);
        this.route.get('/keep-login', this.userController.keepLogin);
        this.route.get('/verify', this.userController.verifyEmail);
        this.route.patch('/recover-password', this.userController.recoverPassword);
        this.route.patch('/update-role', this.userController.updateUserRole);
        this.route.patch('/update-user', this.userController.updateUser);
        // profile controller
        this.route.get('/profile', this.profileController.getUserProfile);
        this.route.patch('/update-pfp', (0, uploader_1.uploaderMemory)().single('imgProfile'), this.profileController.updatePfp);
        this.route.patch('/update-profile', this.profileController.updateProfile);
        // reward controller
        this.route.get('/coupon', this.rewardsController.getUserCoupon);
        this.route.get('/point', this.rewardsController.getUserPoint);
        this.route.post('/get-point-by-price', this.rewardsController.getPointsByPrice);
        this.route.get('/referral', this.rewardsController.getReferred);
        this.route.patch('/use-coupon', this.rewardsController.useCoupon);
        this.route.patch('/restore-coupon', this.rewardsController.restoreCoupon);
    }
    // returning the routes so it can be use in app by calling it as a method
    getRouter() {
        return this.route;
    }
}
exports.UserRouter = UserRouter;
