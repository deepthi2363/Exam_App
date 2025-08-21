# 📝 Exam App

An online exam portal where users can register, log in, take exams, and view results.

Deployed with:

 Frontend → [Vercel](https://vercel.com/)
 
 Backend → [Render](https://render.com/)
 
 Database → MongoDB Atlas

---

## 🚀 Features

 User Registration & Login with JWT authentication
 Start Exam with multiple-choice questions
 Submit Exam & View Results instantly
 Secure backend with Express.js & MongoDB Atlas
 Fully deployed for live use

---

## 🛠 Tech Stack

 Frontend: React.js, Axios, React Router
 Backend: Node.js, Express.js
 Database: MongoDB Atlas
 Deployment:

   Backend → Render
   Frontend → Vercel

---

## 📂 Folder Structure

```
EXAM_APP/
│
├── backend/
│   ├── .env
│   ├── server.js
│   ├── app.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Question.js
│   │   └── Result.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── examRoutes.js
│   │   └── questionRoutes.js
│   └── config/db.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── api.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Backend Setup (Node + Express + MongoDB)

1. Navigate to backend:

   ```bash
   cd backend
   npm install
   ```

2. Create `.env` file inside `backend/`:

   ```env
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   PORT=10000
   ```

3. Run backend locally:

   ```bash
   npm start
   ```

   Backend runs at: `http://localhost:10000`

---

### 2️⃣ Frontend Setup (React)

1. Navigate to frontend:

   ```bash
   cd frontend
   npm install
   ```

2. Create `.env` file inside `frontend/`:

   ```env
   REACT_APP_API_BASE_URL=http://localhost:10000
   ```

3. Run frontend locally:

   ```bash
   npm start
   ```

   Frontend runs at: `http://localhost:3000`

---

## 🌐 Deployment

### 🚀 Deploy Backend on Render

1. Push backend to GitHub
2. Go to [Render](https://render.com/) → New Web Service
3. Connect your repo → set root as `backend/`
4. Add Environment Variables in Render Dashboard:

    `MONGO_URI`
    `JWT_SECRET`
    `PORT` = `10000`
5. Deploy → You’ll get a live API URL like:

   ```
   https://exam-app-xyz.onrender.com
   ```

---

### 🚀 Deploy Frontend on Vercel

1. Push frontend to GitHub
2. Go to [Vercel](https://vercel.com/) → New Project
3. Import repo → set root as `frontend/`
4. Add Environment Variable in Vercel Dashboard:

    `REACT_APP_API_BASE_URL=https://exam-app-xyz.onrender.com` (Render backend URL)
5. Deploy → You’ll get a live site like:

   ```
   https://exam-app.vercel.app
   ```

---

## 📖 API Endpoints

### Auth Routes

 `POST /api/auth/register` → Register new user
 `POST /api/auth/login` → Login user & return JWT

### Question Routes

 `GET /api/questions` → Fetch all questions

### Exam Routes

 `POST /api/exam/submit` → Submit exam answers
 `GET /api/exam/results` → Get results of logged-in user

---

## 🧪 API Testing

You can test APIs using Postman:

1. Import the provided `Exam App Backend APIs (Render Deployment).postman_collection.json` file
2. Update base URL (`http://localhost:5000` or Render URL)
3. Test endpoints easily

---

## ✅ Live Demo

 Frontend (Vercel) → (https://exam-app-liard.vercel.app/)
 Backend (Render) → (https://exam-app-km2k.onrender.com)

---

