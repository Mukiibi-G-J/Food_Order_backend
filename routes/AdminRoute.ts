import express, { Request, Response, NextFunction, Router } from 'express';
import { CreateVandor, GetVandorByID, GetVanndors } from '../controllers';

const router = express.Router();

router.post('/vendor', CreateVandor);
router.get('/vendors', GetVanndors);
router.get('/vendor/:id', GetVandorByID);
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'Hello from  Admin' });
});

export { router as AdminRoute };
