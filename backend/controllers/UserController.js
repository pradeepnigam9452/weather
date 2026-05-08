import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import generateToken from '../utils/function.js'
     
const login = async (req, res) => {
    try {
        const {email,password} = req.body;
        const isUser = await User.findOne({ email });
        if (!isUser) {
            return res.status(404).json({ message: 'User does not exist' });
        }
        const checkPassword = await bcrypt.compare(password, isUser.password);
        if (!checkPassword) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        const token = generateToken(isUser)
        return res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: isUser._id,
                name: isUser.name,
            }
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: "Server error" });
    }
};



const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const isUser = await User.findOne({ email });

    if (isUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashpassword,
    });

    const token = generateToken(newUser);

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
      },
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
export  {login, register}