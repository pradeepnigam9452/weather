Weather App MERN Stack
A modern Weather Application built using the MERN Stack with authentication, favorite cities management, dark mode support, and real-time weather updates.


As a fresher, choosing the right technology is very important for building strong frontend fundamentals. We chose React.js over Next.js for the following reasons:

1. Easier to Learn

React is simpler and beginner-friendly. It helps freshers understand:

Components
Props
State management
Hooks
Routing
API handling

Before learning advanced frameworks like Next.js, it is important to build a solid React foundation.

2. Better Understanding of Core Concepts

React teaches frontend concepts more clearly because developers manually handle:

Routing
State flow
API integration
Component structure

This improves problem-solving skills and frontend understanding.

3. Large Community & Learning Resources

React has:

Huge community support
Many tutorials
Large ecosystem
Beginner-friendly documentation

Freshers can easily find solutions and learning materials online.

4. Industry Demand

React is one of the most widely used frontend libraries in the industry. Learning React first helps freshers:

Prepare for interviews
Build projects easily
Understand modern frontend development
5. Next.js Depends on React

Next.js is built on top of React. Without understanding React properly, learning Next.js becomes difficult.

So the learning path becomes:

HTML → CSS → JavaScript → React → Next.js
6. Faster Project Development for Beginners

For small and medium projects, React is easier to set up and manage. Freshers can focus more on:

UI building
API integration
Authentication
CRUD operations

instead of advanced concepts like:

Server-side rendering (SSR)
Static site generation (SSG)
File-based routing
SEO optimization


React is the best starting point for freshers because it is simple, flexible, beginner-friendly, and helps build strong frontend fundamentals. After gaining confidence in React, moving to Next.js becomes much easier and more effective.




🚀 Features
🔐 User Authentication (Login & Register)
🌤️ Search real-time weather by city
❤️ Add favorite cities
🗑️ Delete favorite cities
🌙 Dark / Light mode
🔒 Protected Routes
📱 Fully Responsive UI
⚡ Modern Tailwind CSS design
🌍 My Cities page



🛠️ Tech Stack
Frontend
React.js
Tailwind CSS
React Router DOM
Axios
Lucide React Icons
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
bcryptjs


Project Structure
weather-app/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md


Installation

1️⃣ Clone Repository
git clone <your-repo-url>

Backend Setup
Go to backend folder
cd backend

Install dependencies
npm install


Create .env
PORT=8000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
WEATHER_API_KEY=your_api_key


Start backend
npm run dev

Backend runs on:  http://localhost:8000


API Routes 
Auth Routes
Method	Route	Description
POST	/api/register	Register user
POST	/api/login	Login user



Weather Routes
Method	Route	Description
GET	/api/weather/:city	Get weather



Favorite City Routes
Method	Route	Description
POST	/api/createFavoriteCity	Add favorite city
GET	/api/allFavoriteCity	Get all favorite cities
DELETE	/api/delete/:id	Delete city


🔒 Protected Routes

Protected pages:

/mycities

Users must login first.



🎨 UI Features
Glassmorphism cards
Responsive layout
Dark mode support
Modern weather dashboard
Smooth transitions


📸 Screens
Home Page
Login Page
Register Page
Favorite Cities Page

