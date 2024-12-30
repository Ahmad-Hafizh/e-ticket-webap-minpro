"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routers_1 = require("./routers/user.routers");
const event_router_1 = require("./routers/event.router");
const organizer_router_1 = require("./routers/organizer.router");
const review_router_1 = require("./routers/review.router");
const transaction_router_1 = require("./routers/transaction.router");
dotenv_1.default.config();
const PORT = process.env.PORT || 8080;
class App {
    constructor() {
        // define to run the method
        this.app = (0, express_1.default)();
        this.configure();
        this.routes();
    }
    configure() {
        // cors & express.json config
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        // define routes
        this.app.get("/", (req, res) => {
            return res.status(200).send("E-ticket api");
        });
        const userRouter = new user_routers_1.UserRouter();
        this.app.use("/users", userRouter.getRouter());
        const eventRouter = new event_router_1.EventRouter();
        this.app.use("/event", eventRouter.getRouter());
        const organizer = new organizer_router_1.OrganizerRouter();
        this.app.use("/organizer", organizer.getRouter());
        const reviewRouter = new review_router_1.ReviewRouter();
        this.app.use("/review", reviewRouter.getRouter());
        const transactionRouter = new transaction_router_1.TransactionRouter();
        this.app.use("/transaction", transactionRouter.getRouter());
    }
    startServer() {
        // run the server
        this.app.listen(PORT, () => {
            console.log("server runs at", PORT);
        });
    }
}
exports.default = new App();
