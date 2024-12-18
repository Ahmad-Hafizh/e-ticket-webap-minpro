import { Response } from 'express';
import { prisma } from '../config/prisma';
import ResponseHandler from '../utils/responseHandler';

class userRepo {
  async checkIsUserExist(userToken: any, res: Response, errMessage: string) {
    const isUserExist = await prisma.user.findUnique({
      where: { user_id: userToken.user_id, email: userToken.email },
    });

    if (!isUserExist) {
      return ResponseHandler.error(res, 'account not exist', 404);
    }

    return isUserExist;
  }
}
export default new userRepo();
