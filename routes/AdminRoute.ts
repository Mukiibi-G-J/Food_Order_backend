import express, { Request, Response, NextFunction, Router } from 'express';
import { CreateVandor } from '../controllers';

const router = express.Router();

router.post('/vandor', CreateVandor);
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'Hello from  Admin' });
});

export { router as AdminRoute };
