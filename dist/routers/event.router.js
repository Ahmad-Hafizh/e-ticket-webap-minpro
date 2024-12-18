"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRouter = void 0;
const express_1 = require("express");
const event_controller_1 = require("../controllers/event.controller");
class EventRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.eventController = new event_controller_1.EventController();
        this.initializeRouters();
    }
    initializeRouters() {
        this.route.post("/", 
        // verifyToken,
        // organizerAuthorization,
        // createEventValidator,
        this.eventController.createEvent);
        this.route.get("/:id", this.eventController.getSpecificEvent);
        this.route.get("/", this.eventController.filterEvent);
        this.route.patch("/:id", 
        // verifyToken,
        // organizerAuthorization,
        this.eventController.updateEvent);
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
