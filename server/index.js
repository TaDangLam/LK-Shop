import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv'

import MongoConnect from './lib/mongodb.js';
import { API_Product } from './routes/productRoute.js';
import { API_Order } from './routes/orderRoute.js';


dotenv.config()
const PORT = process.env.PORT || 4000;

// Database Connection
MongoConnect();

// Middleware
app.use(cors());    
app.use(express.json())

//Router
app.use('/api/product', API_Product),
app.use('/api/order', API_Order),

app.listen(PORT, () => console.log(`Server listening http://localhost:${PORT}`));