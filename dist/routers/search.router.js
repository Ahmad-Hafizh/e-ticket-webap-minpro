"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRouter = void 0;
const express_1 = require("express");
const search_controller_1 = require("../controllers/search.controller");
class SearchRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.serachController = new search_controller_1.SearchController();
        this.initializeRouters();
    }
    initializeRouters() {
        this.route.get("/", this.serachController.filterEvent);
    }
    getRouter() {
        return this.route;
    }
}
exports.SearchRouter = SearchRouter;
