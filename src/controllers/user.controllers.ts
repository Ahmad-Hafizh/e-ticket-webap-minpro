import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import ResponseHandler from '../utils/responseHandler';
import { verify } from 'jsonwebtoken';
import { transporter } from '../config/nodemailer';
import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
import { hashPassword } from '../utils/hashPassword';

export class UserController {
  async signUp(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const user = res.locals.user;
      await prisma.profile.create({ data: { user_id: user.user_id } });
      const referral_code: string = Math.round(Math.random() * 10000).toString();
      await prisma.referral.create({
        data: { referral_code, user_id: user.user_id },
      });

      // parsing string to token
      const authToken = sign({ email: user.email }, process.env.TOKEN_KEY || 'secretkey');
      // sending email with authtoken
      await transporter.sendMail({
        from: 'e-ticket',
        to: user.email,
        subject: 'Verify your Account',
        html: `<div>
           <h1>Thank you ${user.name}, for registrater your account</h1>
           <p>klik link below to verify your account</p>
           <a href='http://localhost:3000/users/verify-email?a_t=${authToken}'>Verify Account</a>
           </div>`,
      });

      return ResponseHandler.success(res, 'sign up is success', 201, { ...user, authToken });
    } catch (error) {
      return ResponseHandler.error(res, 'sign up is failed', 500, error);
    }
  }

  // verifying account method
  async verifyEmail(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const token = res.locals.dcrypt;
      // checking if user exist
      const isUserExist = await prisma.user.findUnique({
        where: { email: token.email },
      });

      if (!isUserExist) {
        return ResponseHandler.error(res, 'account is not found', 404);
      }

      // updating the isverified to true
      const user = await prisma.user.update({
        where: { email: isUserExist.email },
        data: { isVerified: true },
      });

      return ResponseHandler.success(res, 'verfication is success', 200, user);
    } catch (error) {
      return ResponseHandler.error(res, 'verification is failed', 500, error);
    }
  }

  async signIn(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const isUserExist = await prisma.user.findUnique({
        where: { email: req.body.email },
      });

      if (!isUserExist) {
        return ResponseHandler.error(res, 'account is not found', 404);
      }

      const comparePassword = compareSync(req.body.password, isUserExist.password);

      if (!comparePassword) {
        return ResponseHandler.error(res, 'Password is incorrect', 404);
      }

      const token = sign({ user_id: isUserExist.user_id, email: isUserExist.email }, process.env.TOKEN_KEY || 'secretkey');

      return ResponseHandler.success(res, 'verfication is success', 200, {
        name: isUserExist.name,
        email: isUserExist.email,
        pfp_url: isUserExist.pfp_url,
        token,
      });
    } catch (error) {
      return ResponseHandler.error(res, 'verification is failed', 500, error);
    }
  }

  async keepLogin(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const userToken = res.locals.dcrypt;
      const isUserExist = await prisma.user.findUnique({
        where: { user_id: userToken.user_id, email: userToken.email },
      });

      if (!isUserExist) {
        return ResponseHandler.error(res, 'account not exist', 404);
      }

      const newToken = sign({ user_id: isUserExist.user_id, email: isUserExist.email }, process.env.TOKEN_KEY || 'secretkey');

      return ResponseHandler.success(res, 'keep login is success', 200, {
        name: isUserExist.name,
        email: isUserExist.email,
        pfp_url: isUserExist.pfp_url,
        newToken,
      });
    } catch (error) {
      return ResponseHandler.error(res, 'keep login is failed', 500, error);
    }
  }

  async updatePfp(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const userToken = res.locals.dcrypt;

      const isUserExist = await prisma.user.findUnique({
        where: { user_id: userToken.user_id, email: userToken.email },
      });

      if (!isUserExist) {
        return ResponseHandler.error(res, 'account not exist', 404);
      }

      const user = await prisma.user.update({
        where: { user_id: isUserExist.user_id },
        data: { pfp_url: `/profile/${req.file?.filename}` },
      });

      return ResponseHandler.success(res, 'update profile picture is success', 201, user);
    } catch (error) {
      return ResponseHandler.error(res, 'update profile picture is failed', 500, error);
    }
  }

  async updateProfile(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const userToken = res.locals.dcrypt;

      const isUserExist = await prisma.user.findUnique({
        where: { user_id: userToken.user_id, email: userToken.email },
      });

      if (!isUserExist) {
        return ResponseHandler.error(res, 'account not exist', 404);
      }

      const profile = await prisma.profile.update({
        where: { user_id: isUserExist.user_id },
        data: { ...req.body },
      });

      return ResponseHandler.success(res, 'update profile is success', 201, profile);
    } catch (error) {
      return ResponseHandler.error(res, 'update profile is failed', 500, error);
    }
  }

  async createAddress(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const userToken = res.locals.dcrypt;
      console.log(userToken);

      const isProfileExist = await prisma.profile.findUnique({
        where: { user_id: userToken.user_id },
      });

      if (!isProfileExist) {
        return ResponseHandler.error(res, 'account not exist', 404);
      }

      const address = await prisma.address.create({
        data: { ...req.body, profile_id: isProfileExist.profile_id },
      });
      return ResponseHandler.success(res, 'update profile is success', 201, address);
    } catch (error) {
      return ResponseHandler.error(res, 'create address is failed', 500, error);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const findUser = await prisma.user.findUnique({ where: { email: req.body.email } });
      if (!findUser) {
        return ResponseHandler.error(res, 'Account is not found', 404);
      }

      const authToken = sign({ email: findUser.email, user_id: findUser.user_id }, process.env.TOKEN_KEY || 'secretkey');
      await transporter.sendMail({
        from: 'e-ticket',
        to: findUser.email,
        subject: 'Password Recovery',
        html: `<div>
        <h1>Hi ${findUser.name}, Seems like you forgot your password</h1>
        <p>klik link below to recover your password, if its not you try call police</p>
        <a href='http://localhost:3000/users/recover-password?a_t=${authToken}'>recover password</a>
        </div>`,
      });
      return ResponseHandler.success(res, 'An Email sended to your mail', 200);
    } catch (error) {
      return ResponseHandler.error(res, 'Your forgot password is failed', 500, error);
    }
  }

  async recoverPassword(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const token = res.locals.dcrypt;
      const findUser = await prisma.user.findUnique({
        where: { user_id: token.user_id, email: token.email },
      });
      if (!findUser) {
        return ResponseHandler.error(res, 'Account is not found', 404);
      }
      await prisma.user.update({
        where: { user_id: findUser.user_id, email: findUser.email },
        data: {
          password: await hashPassword(req.body.password),
        },
      });
    } catch (error) {
      return ResponseHandler.error(res, 'Your forgot password is failed', 500, error);
    }
  }
}
