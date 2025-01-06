import { Request, Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import ResponseHandler from '../utils/responseHandler';
import { transporter } from '../config/nodemailer';
import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
import { hashPassword } from '../utils/hashPassword';
import { cloudinaryUpload } from '../config/cloudinary';

export class ProfileController {
  async getUserProfile(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const user = res.locals.user;

      const profile = await prisma.profile.findUnique({
        where: { user_id: user.user_id },
      });

      return ResponseHandler.success(res, 'get user profile success', 200, profile);
    } catch (error) {
      return ResponseHandler.error(res, 'get user profile failed', 500, error);
    }
  }

  async updatePfp(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      if (!req.file) {
        return ResponseHandler.error(res, 'Image not available', 404);
      }

      const user = res.locals.user;

      const { secure_url } = await cloudinaryUpload(req.file, 'profile');

      const updatedUser = await prisma.user.update({
        where: { user_id: user.user_id },
        data: { pfp_url: secure_url },
      });

      return ResponseHandler.success(res, 'update profile picture is success', 201, secure_url);
    } catch (error) {
      return ResponseHandler.error(res, 'update profile picture is failed', 500, error);
    }
  }

  async updateProfile(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const user = res.locals.user;

      const profile = await prisma.profile.update({
        where: { user_id: user.user_id },
        data: { ...req.body },
      });

      return ResponseHandler.success(res, 'update profile is success', 201, profile);
    } catch (error) {
      return ResponseHandler.error(res, 'update profile is failed', 500, error);
    }
  }
}
