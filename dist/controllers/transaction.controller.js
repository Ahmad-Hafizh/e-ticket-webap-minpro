"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const prisma_1 = require("../config/prisma");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
class TransactionController {
    generateTransactionAndDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = 18;
                console.log("this is user id", userId);
                const { event, ticket, transactions } = req.body;
                const transaction = yield prisma_1.prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    const user = yield tx.user.findUnique({
                        where: { user_id: userId },
                    });
                    if (!user)
                        throw new Error("User not found");
                    const ticketTypesIdMany = ticket.data.map((value) => {
                        return value.ticketTypesId;
                    });
                    const checkTicketTypes = yield tx.ticket_types.findMany({
                        where: {
                            ticket_types_id: {
                                in: ticketTypesIdMany,
                            },
                        },
                    });
                    console.log("ini ticket types id many :", ticketTypesIdMany);
                    console.log("ini checktickettypes", checkTicketTypes);
                    if (checkTicketTypes.length !== ticketTypesIdMany.length) {
                        throw new Error("One or more ticket types not found");
                    }
                    const createdTransactionDetails = yield tx.transaction_Detail.findMany({
                        where: {
                            user_id: user.user_id,
                            event_id: event.event_id,
                        },
                    });
                    console.log("ini created transaction", createdTransactionDetails);
                    const transaction = yield tx.transaction.create({
                        data: {
                            user_id: userId,
                            coupon_id: transactions.coupon || null,
                            total_amount: transactions.totalAmount,
                            payment_method: transactions.paymentMethod,
                            isPaid: false,
                        },
                    });
                    const transactionDetails = yield tx.transaction_Detail.createMany({
                        data: ticket.data.map((value) => ({
                            user_id: user.user_id,
                            event_id: event.event_id,
                            ticket_types_id: value.ticketTypesId,
                            quantity_bought: value.quantityBought,
                            subtotal: value.subtotal,
                            transaction_id: transaction.transaction_id,
                        })),
                    });
                    yield tx.transaction_Detail.updateMany({
                        where: {
                            transaction_details_id: {
                                in: createdTransactionDetails.map((value) => value.transaction_details_id),
                            },
                        },
                        data: { transaction_id: transaction.transaction_id },
                    });
                    return transaction;
                }));
                return responseHandler_1.default.success(res, "Transaction success", 201, transaction);
            }
            catch (error) {
                console.log(error);
                return responseHandler_1.default.error(res, "Internal server error", 500, error);
            }
        });
    }
    // async generateTransactionDetails(req: Request, res: Response): Promise<any> {
    //   try {
    //     //   const userId = res.locals.dcrypt.user_id;
    //     const userId = 18;
    //     const { data } = req.body;
    //     const transactionDetails = await prisma.$transaction(async (tx) => {
    //       console.log(data);
    //       const user = await tx.user.findUnique({
    //         where: { user_id: userId },
    //       });
    //       const checkEventUser = await tx.event.findUnique({
    //         where: { event_id: data[0].eventId },
    //       });
    //       if (!user || !checkEventUser) {
    //         throw new Error("Unauthorized");
    //       }
    //       const ticketTypesIdMany = data.map((data: any) => {
    //         return data.ticketTypesId;
    //       });
    //       const checkTicketTypes = await tx.ticket_types.findMany({
    //         where: {
    //           ticket_types_id: {
    //             in: ticketTypesIdMany,
    //           },
    //         },
    //       });
    //       if (checkTicketTypes.length !== ticketTypesIdMany.length) {
    //         throw new Error("One or more ticket types not found");
    //       }
    //       const response = await tx.transaction_Detail.createMany({
    //         data: data.map((data: any) => {
    //           return {
    //             user_id: user.user_id,
    //             event_id: checkEventUser.event_id,
    //             ticket_types_id: data.ticketTypesId,
    //             quantity_bought: data.quantityBought,
    //             subtotal: data.subtotal,
    //           };
    //         }),
    //       });
    //       return response;
    //     });
    //     return ResponseHandler.success(
    //       res,
    //       "Transaction details added! Thank you",
    //       201,
    //       transactionDetails
    //     );
    //   } catch (error) {
    //     console.log(error);
    //     return ResponseHandler.error(
    //       res,
    //       "Error adding transaction details",
    //       500,
    //       error
    //     );
    //   }
    // }
    getTransactionDetails(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //   const userId = res.locals.dcrypt.user_id;
                const userId = 18;
                const transactionDetails = yield prisma_1.prisma.transaction_Detail.findMany({
                    where: { user_id: userId },
                });
                return responseHandler_1.default.success(res, "Get transaction details by user success", 201, transactionDetails);
            }
            catch (error) {
                return responseHandler_1.default.error(res, "Get transaction details error", 500, error);
            }
        });
    }
    generateTransaction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //   const userId = res.locals.dcrypt.user_id;
                const userId = 18;
                const { eventId, transactionDetailsId, couponId, paymentMethod, totalAmount, } = req.body;
                const transaction = yield prisma_1.prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    //Check if user valid
                    const user = yield tx.user.findUnique({
                        where: { user_id: userId },
                    });
                    // //Check if transaction details valid
                    // const checkTransactionDetails = await tx.transaction_Detail.findUnique({
                    //   where: { transaction_details_id: transactionDetailsId },
                    // });
                    //check if coupon valid
                    if (couponId) {
                        const couponValid = yield tx.coupon.findUnique({
                            where: { coupon_id: couponId },
                        });
                        return couponValid;
                    }
                    if (!user) {
                        throw new Error("Not found");
                    }
                    //Create transaction
                    const response = yield tx.transaction.create({
                        data: {
                            user: {
                                connect: {
                                    user_id: 18,
                                },
                            },
                            transaction_details: {
                                connect: transactionDetailsId.map((value) => ({
                                    transaction_details_id: value,
                                })),
                            },
                            coupon_id: couponId ? couponId : null, // Boleh null
                            total_amount: totalAmount,
                            payment_method: paymentMethod,
                            isPaid: false,
                        },
                    });
                    //Update the transactionid column in transaction detail id table
                    const updatingTransactionDetails = yield tx.transaction_Detail.updateMany({
                        where: {
                            transaction_details_id: {
                                in: transactionDetailsId.map((value) => {
                                    return value;
                                }),
                            },
                        },
                        data: {
                            transaction_id: response.transaction_id,
                        },
                    });
                    return response;
                }));
                return responseHandler_1.default.success(res, "Transaction added! Please pay the bill", 201, transaction);
            }
            catch (error) {
                console.log(error);
                return responseHandler_1.default.error(res, "Error adding transaction", 500, error);
            }
        });
    }
    paidTransaction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transactionId = req.params.id;
                const { eventId } = req.body;
                const userId = 18;
                const updateTransaction = yield prisma_1.prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    const response = yield prisma_1.prisma.transaction.update({
                        where: { transaction_id: parseInt(transactionId) },
                        data: { isPaid: true },
                    });
                    //adding user to event-user relation. Will allow user to review after the date of event has passed
                    const updatingUser = yield tx.event.update({
                        where: { event_id: parseInt(eventId) },
                        data: {
                            customer: {
                                connect: { user_id: userId },
                            },
                        },
                    });
                    return response;
                }));
                return responseHandler_1.default.success(res, "Transaction paid. Thank you!", 201, updateTransaction);
            }
            catch (error) {
                return responseHandler_1.default.error(res, "Error paying transaction, try again", 500, error);
            }
        });
    }
    getTransactionbyUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //   const userId = res.locals.dcrypt.user_id;
                const userId = parseInt(req.params.id);
                const transaction = yield prisma_1.prisma.transaction.findMany({
                    where: { user_id: userId },
                });
                return responseHandler_1.default.success(res, "Get transaction by user success", 201, transaction);
            }
            catch (error) {
                return responseHandler_1.default.error(res, "Get transaction by user error", 500, error);
            }
        });
    }
    getTransactionbyOrganizer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const organizerId = res.locals.dcrypt.user_id;
                const organizerId = parseInt(req.params.id);
                const response = yield prisma_1.prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    const organizer = yield prisma_1.prisma.organizer.findUnique({
                        where: {
                            user_id: organizerId,
                        },
                    });
                    const transactionsByOrganizer = yield prisma_1.prisma.transaction.findMany({
                        where: {
                            transaction_details: {
                                some: {
                                    event: {
                                        organizer: {
                                            organizer_id: organizerId,
                                        },
                                    },
                                },
                            },
                        },
                        //   include: {
                        //     transaction_details: {
                        //       include: {
                        //         event: true,
                        //         user: true,
                        //       },
                        //     },
                        //   },
                    });
                    return transactionsByOrganizer;
                }));
                return responseHandler_1.default.success(res, "Get transaction by organizer success!", 201, response);
            }
            catch (error) {
                return responseHandler_1.default.error(res, "Get transaction by organizer error!", 500, error);
            }
        });
    }
}
exports.TransactionController = TransactionController;
