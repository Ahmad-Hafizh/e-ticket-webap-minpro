import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import ResponseHandler from '../utils/responseHandler';
import { verify } from 'jsonwebtoken';
import { transporter } from '../config/nodemailer';
import { sign } from 'jsonwebtoken';

export class UserController {
  async signUp(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const user = res.locals.user;
      await prisma.profile.create({ data: { user_id: user.user_id } });
      const referral_code: string = Math.round(Math.random() * 10000).toString();
      await prisma.referral.create({
        data: { referral_code, user_id: user.user_id },
      });

      // sending email with authtoken
      const authToken = sign({ email: user.email }, 'secretkey');
      await transporter.sendMail({
        from: 'e-ticket',
        to: user.email,
        subject: 'Verify your Account',
        html: `<div>
           <h1>Thank you ${user.name}, for registrater your account</h1>
           <p>klik link below to verify your account</p>
           <a href='http://localhost:3005/users/verify/${authToken}'>Verify Account</a>
           </div>`,
      });
      return ResponseHandler.success(res, 'sign up is success', 201, { user });
    } catch (error) {
      return ResponseHandler.error(res, 'sign up is failed', 500, error);
    }
  }

  // verifying account method
  async verifyEmail(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      // parsing token
      // if the token passed to header
      const authToken = req.headers.authorization || '';

      // if the token passed to params
      // const authToken = req.params.token;
      const token: any = verify(authToken, 'secretkey');

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
}
