import express from 'express';
import { login, register } from '../controllers/UserController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/check',(req,res)=>{
    res.send('chal rha h ')
})

export default router;
