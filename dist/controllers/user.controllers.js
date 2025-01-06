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
exports.UserController = void 0;
const prisma_1 = require("../config/prisma");
const responseHandler_1 = __importDefault(require("../utils/responseHandler"));
const nodemailer_1 = require("../config/nodemailer");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt_1 = require("bcrypt");
const hashPassword_1 = require("../utils/hashPassword");
class UserController {
    signUp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // checking if user already exist
                const isUserExist = yield prisma_1.prisma.user.findUnique({
                    where: { email: req.body.email },
                });
                // if user already exist return response error rc 404
                if (isUserExist) {
                    return responseHandler_1.default.error(res, 'email is already used', 404);
                }
                const createUserFlow = yield prisma_1.prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    // check if refferal code is available
                    // if there is no referral code available
                    const user = yield tx.user.create({
                        data: {
                            name: req.body.name,
                            email: req.body.email,
                            password: yield (0, hashPassword_1.hashPassword)(req.body.password),
                        },
                    });
                    yield tx.profile.create({ data: { user_id: user.user_id } });
                    return user;
                }));
                const referral_code = `${createUserFlow.name.slice(0, 4).toUpperCase()}${Math.round(Math.random() * 10000).toString()}`;
                const authToken = (0, jsonwebtoken_1.sign)({ email: createUserFlow.email, user_id: createUserFlow.user_id }, process.env.TOKEN_KEY || 'secretkey');
                yield prisma_1.prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    yield tx.referral.create({
                        data: { referral_code, user_id: createUserFlow.user_id },
                    });
                    // parsing string to token
                    // sending email with authtoken
                    yield nodemailer_1.transporter.sendMail({
                        from: 'e-ticket',
                        to: createUserFlow.email,
                        subject: 'Verify your Account',
                        html: `<div>
             <h1>Thank you ${createUserFlow.name}, for registrater your account</h1>
             <p>klik link below to verify your account</p>
             <a href='${process.env.FE_URL}/verify-email?a_t=${authToken}'>Verify Account</a>
             </div>`,
                    });
                }));
                return responseHandler_1.default.success(res, 'sign up is success', 201, createUserFlow);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'sign up is failed', 500, error);
            }
        });
    }
    addReferral(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_1.prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    const findReferral = yield tx.referral.findUnique({
                        where: { referral_code: req.body.referral_code.toString() },
                        include: {
                            user: true,
                        },
                    });
                    // check if referral data is available
                    if (!findReferral) {
                        return responseHandler_1.default.error(res, 'referral not found', 404);
                    }
                    // if user input his own referral code
                    if ((findReferral === null || findReferral === void 0 ? void 0 : findReferral.user.email) === req.body.email) {
                        return responseHandler_1.default.error(res, 'cant refer your self', 403);
                    }
                    // creating user data
                    yield tx.user.update({
                        where: { email: req.body.email, user_id: req.body.user_id },
                        data: { referred_id: findReferral === null || findReferral === void 0 ? void 0 : findReferral.referral_id },
                    });
                    // define expired date for the point
                    const expired_date = new Date();
                    expired_date.setMonth(expired_date.getMonth() + 3);
                    //adding 10,000 point to the referrer point wallet
                    yield tx.point.create({
                        data: { user_id: findReferral.user_id, amount: 10000, expired_date },
                    });
                    yield tx.coupon.create({
                        data: {
                            coupon_name: 'Referral Coupon',
                            user_id: req.body.user_id,
                            coupon_code: Math.round(Math.random() * 10000).toString(),
                            discount: 10,
                            expired_date,
                        },
                    });
                }));
                return responseHandler_1.default.success(res, 'adding referral is success', 200);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'adding referral is failed', 500, error);
            }
        });
    }
    // verifying account method
    verifyEmail(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = res.locals.user;
                // updating the isverified to true
                const userVerified = yield prisma_1.prisma.user.update({
                    where: { email: user.email },
                    data: { isVerified: true },
                });
                return responseHandler_1.default.success(res, 'verfication is success', 200);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'verification is failed', 500, error);
            }
        });
    }
    signIn(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // check if user exist
                const isUserExist = yield prisma_1.prisma.user.findUnique({
                    where: { email: req.body.email },
                });
                // if not exist response error
                if (!isUserExist) {
                    return responseHandler_1.default.error(res, 'account is not found', 404);
                }
                // comapring the input password with the hash password
                const comparePassword = (0, bcrypt_1.compareSync)(req.body.password, isUserExist.password);
                // if not same send response error
                if (!comparePassword) {
                    return responseHandler_1.default.error(res, 'Password is incorrect', 404);
                }
                // send token
                const token = (0, jsonwebtoken_1.sign)({
                    user_id: isUserExist.user_id,
                    email: isUserExist.email,
                    role: isUserExist.role,
                    isVerified: isUserExist.isVerified,
                }, process.env.TOKEN_KEY || 'secretkey');
                return responseHandler_1.default.success(res, 'verfication is success', 200, {
                    name: isUserExist.name,
                    email: isUserExist.email,
                    pfp_url: isUserExist.pfp_url,
                    isVerified: isUserExist.isVerified,
                    token,
                });
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'verification is failed', 500, error);
            }
        });
    }
    keepLogin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = res.locals.user;
                const newToken = (0, jsonwebtoken_1.sign)({
                    user_id: user.user_id,
                    email: user.email,
                    role: user.role,
                    isVerified: user.isVerified,
                }, process.env.TOKEN_KEY || 'secretkey');
                return responseHandler_1.default.success(res, 'keep login is success', 200, {
                    name: user.name,
                    email: user.email,
                    pfp_url: user.pfp_url,
                    isVerified: user.isVerified,
                    newToken,
                });
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'keep login is failed', 500, error);
            }
        });
    }
    updateUserRole(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = res.locals.user;
                yield prisma_1.prisma.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                    yield tx.user.update({
                        where: { email: user.email, user_id: user.user_id },
                        data: {
                            role: 'organizer',
                        },
                    });
                    const organizer = yield tx.organizer.create({
                        data: {
                            user_id: user.user_id,
                            organizer_name: req.body.organizer_name,
                            organizer_email: req.body.organizer_email,
                            organizer_phone: req.body.organizer_phone,
                            organizer_address: req.body.organizer_address,
                        },
                    });
                    yield tx.bank_account.create({
                        data: {
                            bank_account_name: req.body.bank_account_name,
                            bank_account_number: req.body.bank_account_number,
                            bank_name: req.body.bank_name,
                            organizer_id: organizer.organizer_id,
                        },
                    });
                }));
                return responseHandler_1.default.success(res, 'update user role is success', 200);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'update user role is failed', 500, error);
            }
        });
    }
    forgotPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findUser = yield prisma_1.prisma.user.findUnique({
                    where: { email: req.body.email },
                });
                if (!findUser) {
                    return responseHandler_1.default.error(res, 'Account is not found', 404);
                }
                const authToken = (0, jsonwebtoken_1.sign)({ email: findUser.email, user_id: findUser.user_id }, process.env.TOKEN_KEY || 'secretkey');
                yield nodemailer_1.transporter.sendMail({
                    from: 'e-ticket',
                    to: findUser.email,
                    subject: 'Password Recovery',
                    html: `<div>
        <h1>Hi ${findUser.name}, Seems like you forgot your password</h1>
        <p>klik link below to recover your password, if its not you try call police</p>
        <a href='${process.env.FE_URL}/recover-password?a_t=${authToken}'>recover password</a>
        </div>`,
                });
                return responseHandler_1.default.success(res, 'An Email sended to your mail', 200);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'Your forgot password is failed', 500, error);
            }
        });
    }
    recoverPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = res.locals.user;
                yield prisma_1.prisma.user.update({
                    where: { user_id: user.user_id, email: user.email },
                    data: {
                        password: yield (0, hashPassword_1.hashPassword)(req.body.password),
                    },
                });
                return responseHandler_1.default.error(res, 'your reset password is success', 200);
            }
            catch (error) {
                return responseHandler_1.default.error(res, 'Your reset password is failed', 500, error);
            }
        });
    }
}
exports.UserController = UserController;
