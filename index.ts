import express from 'express';
import { AdminRoute, VandorRoute } from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import { MONGO_URI } from './config';
import dbConnection from './services/Database';

const app = express();

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', AdminRoute);
app.use('/vendor', VandorRoute);

// app.use('/', (req, res) => {
//   return res.json('Hello World!');
dbConnection();
app.listen(8000, () => {
  //   console.clear();
  console.log('Server is running on port 8000');
});
