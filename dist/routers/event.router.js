"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRouter = void 0;
const express_1 = require("express");
const event_controller_1 = require("../controllers/event.controller");
const eventValidator_1 = require("../middlewares/eventValidator");
const verifyToken_1 = require("../middlewares/verifyToken");
const orgAuthor_1 = require("../middlewares/orgAuthor");
const uploader_1 = require("../middlewares/uploader");
class EventRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.eventController = new event_controller_1.EventController();
        this.initializeRouters();
    }
    initializeRouters() {
        this.route.get("/", this.eventController.getEventMainPage);
        this.route.get("/all", this.eventController.getAllEvent);
        this.route.post("/", eventValidator_1.createEventValidator, (0, uploader_1.uploaderMemory)().single("eventBanner"), verifyToken_1.verifyToken, orgAuthor_1.organizerAuthorization, this.eventController.createEvent);
        this.route.get("/location", this.eventController.getEventLocation);
        this.route.get("/:title", this.eventController.getSpecificEvent);
        // this.route.patch(
        //   "/:id",
        //   verifyToken,
        //   organizerAuthorization,
        //   this.eventController.updateEvent
        // );
        this.route.delete("/:id", 
        // verifyToken,
        // organizerAuthorization,
        this.eventController.deleteEvent);
    }
    getRouter() {
        return this.route;
    }
}
exports.EventRouter = EventRouter;
