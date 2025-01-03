import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma";
import ResponseHandler from "../utils/responseHandler";
import { connect } from "http2";

export class TransactionController {
  async generateTransactionAndDetails(
    req: Request,
    res: Response
  ): Promise<any> {
    try {
      const userId = 18;
      console.log("this is user id", userId);
      const { event, ticket, transactions } = req.body;
      const transaction = await prisma.$transaction(async (tx) => {
        const user = await tx.user.findUnique({
          where: { user_id: userId },
        });
        if (!user) throw new Error("User not found");

        const ticketTypesIdMany = ticket.data.map((value: any) => {
          return value.ticketTypesId;
        });

        const checkTicketTypes = await tx.ticket_types.findMany({
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

        const createdTransactionDetails = await tx.transaction_Detail.findMany({
          where: {
            user_id: user.user_id,
            event_id: event.event_id,
          },
        });

        console.log("ini created transaction", createdTransactionDetails);

        const transaction = await tx.transaction.create({
          data: {
            user_id: userId,
            coupon_id: transactions.coupon || null,
            total_amount: transactions.totalAmount,
            payment_method: transactions.paymentMethod,
            isPaid: false,
          },
        });
        const transactionDetails = await tx.transaction_Detail.createMany({
          data: ticket.data.map((value: any) => ({
            user_id: user.user_id,
            event_id: event.event_id,
            ticket_types_id: value.ticketTypesId,
            quantity_bought: value.quantityBought,
            subtotal: value.subtotal,
            transaction_id: transaction.transaction_id,
          })),
        });

        await tx.transaction_Detail.updateMany({
          where: {
            transaction_details_id: {
              in: createdTransactionDetails.map(
                (value: any) => value.transaction_details_id
              ),
            },
          },
          data: { transaction_id: transaction.transaction_id },
        });
        return transaction;
      });
      return ResponseHandler.success(
        res,
        "Transaction success",
        201,
        transaction
      );
    } catch (error) {
      console.log(error);
      return ResponseHandler.error(res, "Internal server error", 500, error);
    }
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

  async getTransactionDetails(req: Request, res: Response): Promise<any> {
    try {
      //   const userId = res.locals.dcrypt.user_id;
      const userId = 18;
      const transactionDetails = await prisma.transaction_Detail.findMany({
        where: { user_id: userId },
      });

      return ResponseHandler.success(
        res,
        "Get transaction details by user success",
        201,
        transactionDetails
      );
    } catch (error) {
      return ResponseHandler.error(
        res,
        "Get transaction details error",
        500,
        error
      );
    }
  }

  async generateTransaction(req: Request, res: Response): Promise<any> {
    try {
      //   const userId = res.locals.dcrypt.user_id;
      const userId = 18;

      const {
        eventId,
        transactionDetailsId,
        couponId,
        paymentMethod,
        totalAmount,
      } = req.body;

      const transaction = await prisma.$transaction(async (tx) => {
        //Check if user valid
        const user = await tx.user.findUnique({
          where: { user_id: userId },
        });

        // //Check if transaction details valid
        // const checkTransactionDetails = await tx.transaction_Detail.findUnique({
        //   where: { transaction_details_id: transactionDetailsId },
        // });

        //check if coupon valid
        if (couponId) {
          const couponValid = await tx.coupon.findUnique({
            where: { coupon_id: couponId },
          });
          return couponValid;
        }

        if (!user) {
          throw new Error("Not found");
        }

        //Create transaction
        const response = await tx.transaction.create({
          data: {
            user: {
              connect: {
                user_id: 18,
              },
            },
            transaction_details: {
              connect: transactionDetailsId.map((value: any) => ({
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
        const updatingTransactionDetails =
          await tx.transaction_Detail.updateMany({
            where: {
              transaction_details_id: {
                in: transactionDetailsId.map((value: any) => {
                  return value;
                }),
              },
            },
            data: {
              transaction_id: response.transaction_id,
            } as any,
          });

        return response;
      });

      return ResponseHandler.success(
        res,
        "Transaction added! Please pay the bill",
        201,
        transaction
      );
    } catch (error) {
      console.log(error);
      return ResponseHandler.error(res, "Error adding transaction", 500, error);
    }
  }

  async paidTransaction(req: Request, res: Response): Promise<any> {
    try {
      const transactionId = req.params.id;
      const { eventId } = req.body;
      const userId = 18;
      const updateTransaction = await prisma.$transaction(async (tx) => {
        const response = await prisma.transaction.update({
          where: { transaction_id: parseInt(transactionId) },
          data: { isPaid: true },
        });
        //adding user to event-user relation. Will allow user to review after the date of event has passed
        const updatingUser = await tx.event.update({
          where: { event_id: parseInt(eventId) },
          data: {
            customer: {
              connect: { user_id: userId },
            },
          },
        });
        return response;
      });

      return ResponseHandler.success(
        res,
        "Transaction paid. Thank you!",
        201,
        updateTransaction
      );
    } catch (error) {
      return ResponseHandler.error(
        res,
        "Error paying transaction, try again",
        500,
        error
      );
    }
  }

  async getTransactionbyUser(req: Request, res: Response): Promise<any> {
    try {
      //   const userId = res.locals.dcrypt.user_id;
      const userId = parseInt(req.params.id);
      const transaction = await prisma.transaction.findMany({
        where: { user_id: userId },
      });

      return ResponseHandler.success(
        res,
        "Get transaction by user success",
        201,
        transaction
      );
    } catch (error) {
      return ResponseHandler.error(
        res,
        "Get transaction by user error",
        500,
        error
      );
    }
  }

  async getTransactionbyOrganizer(req: Request, res: Response): Promise<any> {
    try {
      // const organizerId = res.locals.dcrypt.user_id;
      const organizerId = parseInt(req.params.id);
      const response = await prisma.$transaction(async (tx) => {
        const organizer = await prisma.organizer.findUnique({
          where: {
            user_id: organizerId,
          },
        });

        const transactionsByOrganizer = await prisma.transaction.findMany({
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
      });

      return ResponseHandler.success(
        res,
        "Get transaction by organizer success!",
        201,
        response
      );
    } catch (error) {
      return ResponseHandler.error(
        res,
        "Get transaction by organizer error!",
        500,
        error
      );
    }
  }
}
