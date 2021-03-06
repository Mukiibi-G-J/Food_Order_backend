import { MONGO_URI } from '../config';
// import { MONGO_URI } from '../config';
const mongoose = require('mongoose');

export default async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
