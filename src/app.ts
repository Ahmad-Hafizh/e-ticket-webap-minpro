import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8080;

class App {
  readonly app: Application;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
  }

  private configure() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes() {
    this.app.get('/', (req: Request, res: Response): any => {
      return res.status(200).send('E-ticket api');
    });
  }

  public startServer(): void {
    this.app.listen(PORT, () => {
      console.log('server runs at', PORT);
    });
  }
}

export default new App();
