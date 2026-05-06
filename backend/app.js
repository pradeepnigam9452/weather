import express from 'express';
import mongoose from 'mongoose';



const app = express();

app.get('/',(req,res)=>{
    res.json({massage : 'hello '})
})


app.listen(8000)