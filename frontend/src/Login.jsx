// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       return setError("All fields are required");
//     }

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         "http://localhost:5000/login",
//         formData
//       );

//       localStorage.setItem("token", res.data.token);

//       navigate("/dashboard");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-3xl p-20 w-full max-w-md">
        
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Login
//         </h2>

//         {error && (
//           <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
          
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full border px-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           <button
//             type="submit"
//             className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Login"}
//           </button>
//         </form>

//         <p className="text-center text-sm mt-4">
//           Don’t have an account?{" "}
//           <Link to="/register" className="text-blue-500">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { FiMail, FiLock, FiLogIn, FiEye, FiEyeOff } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const success = await login(email, password);
    setIsSubmitting(false);
    if (success) {
      navigate('/menu');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
        {/* Background Decorative Blurs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full glass p-10 rounded-[40px] shadow-2xl relative z-10 border-white/20"
      >
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-[28px] mb-6 text-primary scale-110">
                <FiLogIn className="h-10 w-10 stroke-[2.5]" />
            </div>
            <h2 className="text-4xl font-poppins font-black dark:text-white mb-3">Welcome Back</h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">Ready for your next feast?</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-primary ml-1">Email Connection</label>
            <div className="relative group">
              <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors h-5 w-5" />
              <input 
                type="email" 
                required 
                className="input-field pl-14 h-16 rounded-2xl bg-white/50 dark:bg-black/20"
                placeholder="chef@foodie.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-primary ml-1">Password Key</label>
            <div className="relative group">
              <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors h-5 w-5" />
              <input 
                type={showPassword ? "text" : "password"} 
                required 
                className="input-field pl-14 pr-14 h-16 rounded-2xl bg-white/50 dark:bg-black/20"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full btn-primary py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-primary to-secondary shadow-xl shadow-primary/20"
          >
            {isSubmitting ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-12 text-center pt-8 border-t border-gray-100 dark:border-white/5">
            <p className="text-gray-500 dark:text-gray-400 font-medium">
                New to the platform? {' '}
                <Link to="/register" className="text-primary font-black hover:underline cursor-pointer">Start Here</Link>
            </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;