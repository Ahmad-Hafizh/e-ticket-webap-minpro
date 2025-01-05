import multer from 'multer';
import path from 'path';
import { Request } from 'express';

export const uploader = (directory: string, filePrefix?: string) => {
  console.log('udah sampe sini');

  // default target loc
  const defaultDir = path.join(__dirname, '../../public');
  // configure disk storage
  const configureStoreFile = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) => {
      const fileDestination = defaultDir + directory;
      console.log('file destination', fileDestination);

      callback(null, fileDestination);
    },
    filename: (req: Request, file: Express.Multer.File, callback: (error: Error | null, destination: string) => void) => {
      if (filePrefix) {
        const existName = file.originalname.split('.');
        // file type: jpg, png, webp
        const fileType = existName[existName.length - 1];

        const newFileName = `${filePrefix}${Date.now()}.${fileType}`;
        console.log('file name', newFileName);

        callback(null, newFileName);
      } else {
        callback(null, file.originalname);
      }
    },
  });

  return multer({ storage: configureStoreFile });
};

export const uploaderMemory = () => {
  return multer({ storage: multer.memoryStorage() });
};
