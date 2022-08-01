import {
  AdminRoute,
  CustomerRoute,
  ShoppingRoute,
  VandorRoute,
} from '../routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import express, { Application } from 'express';

export default async (app: Application) => {
  app.use(bodyParser.json({ limit: '30mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  // const imagePath = path.join(__dirname, '../images');

  app.use('/images', express.static(path.join(__dirname, 'images')));

  app.use('/admin', AdminRoute);
  app.use('/vandor', VandorRoute);
  app.use('/customer', CustomerRoute);

  app.use(ShoppingRoute);
};
