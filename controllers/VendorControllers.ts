import { EditVendorInput, VendorLoginInput } from '../dto';
import { Request, Response, NextFunction } from 'express';
import { FindVendor } from './AdminController';
import { GenerateSignature, ValidatePassword } from '../utils';

export const VendorLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = <VendorLoginInput>req.body;
  const existingUser = await FindVendor('', email);
  if (existingUser !== null) {
    const validation = await ValidatePassword(
      password,
      existingUser.password,
      existingUser.salt
    );
    if (validation) {
      const signature = await GenerateSignature({
        _id: existingUser._id,
        email: existingUser.email,
        name: existingUser.name,
        foodType: existingUser.foodType,
      });
      return res.json(signature);
    } else {
      return res.json({ messege: 'Password isn not valid' });
    }
  }

  return res.json({ message: 'Login credential is not valid' });
};

export const GetVendorProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  if (user) {
    const existingVendor = await FindVendor(user._id);
    return res.json(existingVendor);
  }
  return res.json({ message: 'vendor Information Not Found' });
};

export const UpdateVendorProfile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  const { foodType, name, address, phone } = <EditVendorInput>req.body;
  if (user) {
    const existingVendor = await FindVendor(user._id);
    if (existingVendor !== null) {
      existingVendor.name = name;
      existingVendor.address;
      existingVendor.phone = phone;
      existingVendor.foodType = foodType;
      const saveResult = await existingVendor.save();
      return res.json(saveResult);
    }
  }
  return res.json({ message: 'Unable to Update vendor profile ' });
};

export const UpdateVendorService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  if (user) {
    const existingVendor = await FindVendor(user._id);

    if (existingVendor !== null) {
      existingVendor.serviceAvailable = !existingVendor.serviceAvailable;
      //  if(lat && lng){
      //      existingVendor.lat = lat;
      //      existingVendor.lng = lng;
      //  }
      const saveResult = await existingVendor.save();

      return res.json(saveResult);
    }
  }
  return res.json({ message: 'Unable to Update vendor profile ' });
};
