import express, { Request, Response, NextFunction } from 'express';
import {
  GetVendorProfile,
  UpdateVendorProfile,
  UpdateVendorService,
  VendorLogin,
} from '../controllers';
import { Authenticate } from '../middlewares';
const router = express.Router();

router.post('/login', VendorLogin);
router.use(Authenticate);
router.get('/profile', GetVendorProfile);
router.patch('/profile', UpdateVendorProfile);
// router.patch('/coverimage', images,UpdateVendorCoverImage);
router.patch('/service', UpdateVendorService);

// router.post('/food', images,AddFood);
// router.get('/food', GetFoods)

// router.get('/orders', GetOrders);
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'Hello from Vandor' });
});

export { router as VandorRoute };
