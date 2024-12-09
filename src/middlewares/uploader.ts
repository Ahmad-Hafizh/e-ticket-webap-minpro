import multer from 'multer';
import path from 'path';
import { Request } from 'express';

export const uploader = (directory: string, filePrefix?: string) => {
  // default target loc
  const defaultDir = path.join(__dirname, '../../public');
  // configure disk storage
  const configureStoreFile = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) => {
      const fileDestination = defaultDir + directory;
      callback(null, fileDestination);
    },
    filename: (req: Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) => {
      if (filePrefix) {
        const existName = file.originalname.split('.');
        // file type: jpg, png, webp
        const fileType = existName[existName.length - 1];

        const newFileName = `${filePrefix}${Date.now()}.${fileType}`;

        callback(null, newFileName);
      } else {
        callback(null, file.originalname);
      }
    },
  });

  return multer({ storage: configureStoreFile });
};
