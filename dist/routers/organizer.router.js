"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizerRouter = void 0;
const express_1 = require("express");
const organizer_controller_1 = require("../controllers/organizer.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
const orgAuthor_1 = require("../middlewares/orgAuthor");
class OrganizerRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.organizerController = new organizer_controller_1.OrganizerController();
        this.initializeRoute();
    }
    initializeRoute() {
        this.route.get('/', verifyToken_1.verifyToken, orgAuthor_1.organizerAuthorization, this.organizerController.getProfile);
        this.route.patch('/update-profile', verifyToken_1.verifyToken, orgAuthor_1.organizerAuthorization, this.organizerController.updateProfile);
        this.route.patch('/update-bank', verifyToken_1.verifyToken, orgAuthor_1.organizerAuthorization, this.organizerController.updateBank);
        this.route.post('/stat', verifyToken_1.verifyToken, orgAuthor_1.organizerAuthorization, this.organizerController.getStat);
    }
    getRouter() {
        return this.route;
    }
}
exports.OrganizerRouter = OrganizerRouter;
