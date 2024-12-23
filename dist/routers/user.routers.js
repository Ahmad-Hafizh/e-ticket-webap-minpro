"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
// import { createUser } from '../middlewares/createUser';
const userValidator_1 = require("../middlewares/userValidator");
const verifyToken_1 = require("../middlewares/verifyToken");
const uploader_1 = require("../middlewares/uploader");
class UserRouter {
    constructor() {
        // router config
        this.route = (0, express_1.Router)();
        // initialize controller as a class
        // controllers needs to be created new instances to run
        this.userController = new user_controllers_1.UserController();
        this.initializeRouters();
    }
    initializeRouters() {
        // define every routes from controllers
        // new users
        this.route.post('/signup', userValidator_1.signUpValidator, this.userController.signUp);
        this.route.patch('/add-referral', this.userController.addReferral);
        // this.route.patch('/add-referral', verifyToken, this.userController.addReferral);
        this.route.get('/verify', verifyToken_1.verifyToken, this.userController.verifyEmail);
        // sign-in user
        this.route.post('/signin', userValidator_1.signInValidator, this.userController.signIn);
        this.route.get('/keep-login', verifyToken_1.verifyToken, this.userController.keepLogin);
        // update user & profile
        this.route.patch('/update-pfp', verifyToken_1.verifyToken, (0, uploader_1.uploader)('/profile', 'PFP').single('imgProfile'), this.userController.updatePfp);
        this.route.patch('/update-role', verifyToken_1.verifyToken, this.userController.updateUserRole);
        this.route.patch('/update-profile', verifyToken_1.verifyToken, this.userController.updateProfile);
        this.route.post('/create-address', verifyToken_1.verifyToken, this.userController.createAddress);
        // authentication prob
        this.route.post('/forgot-password', this.userController.forgotPassword);
        this.route.patch('/recover-password', verifyToken_1.verifyToken, this.userController.recoverPassword);
    }
    // returning the routes so it can be use in app by calling it as a method
    getRouter() {
        return this.route;
    }
}
exports.UserRouter = UserRouter;
