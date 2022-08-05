"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_SECRET = exports.PORT = exports.MONGO_URI = void 0;
// mongodb://localhost:27017/online_food_delivery
// export const MONGO_URI = 'mongodb://localhost:27017/online_food_delivery';
exports.MONGO_URI = 'mongodb+srv://admin:admin@cluster0.wmapd.mongodb.net/?retryWrites=true&w=majority';
// mongodb+srv://admin:@cluster0.wmapd.mongodb.net/?retryWrites=true&w=majority
exports.PORT = process.env.PORT || 8000;
exports.APP_SECRET = 'Our_APP_Secret';
//# sourceMappingURL=index.js.map