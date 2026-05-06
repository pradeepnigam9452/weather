import express from 'express';
import mongoose from 'mongoose';
import ConnectDb from './utils/Db.js'
import userRoutes from './routes/userRoutes.js';
const app = express();
app.use(express.json())
ConnectDb()

app.use('/', userRoutes);

app.get('/',(req,res)=>{
    res.json({massage : 'hello '})
})


app.listen(8000)