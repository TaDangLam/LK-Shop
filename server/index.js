import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

import MongoConnect from './lib/mongodb.js';

dotenv.config()
const PORT = process.env.PORT || 4000;

// Access database
MongoConnect();

app.use(cors());    

app.get('/', (req, res) => {
    res.send({ message: 'test1' });
});

app.get('/api', (req, res) => {
    res.json({ message: 'cái con cặc', message1: 'Cái Lồn' });
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));