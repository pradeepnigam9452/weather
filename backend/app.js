import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import ConnectDb from './utils/Db.js'
import userRoutes from './routes/userRoutes.js';
import weatherRoutes from './routes/WetherRoutes.js'
import cityRoutes from './routes/CityRoutes.js'
const app = express();
app.use(cors())
app.use(express.json())
ConnectDb()

app.use('/api', userRoutes);
app.use("/api", weatherRoutes);
app.use('/api',cityRoutes);
app.get('/',(req,res)=>{
    res.json({massage : 'hello '})
})


app.listen(8000)