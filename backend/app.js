import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import ConnectDb from './utils/Db.js'
import userRoutes from './routes/userRoutes.js';
const app = express();
app.use(cors())
app.use(express.json())
ConnectDb()

app.use('/api', userRoutes);
app.get('/',(req,res)=>{
    res.json({massage : 'hello '})
})


app.listen(8000)