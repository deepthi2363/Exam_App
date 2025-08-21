# Exam App

## Description
Exam App is a student-side full-stack application developed for taking Assessment. The application allows students to register, login, and take timed exams with multiple-choice questions (MCQs). It includes features like randomized question fetching, navigation through questions, a countdown timer with auto-submit, and result display after submission. The backend is built with Node.js, Express.js, and MongoDB, while the frontend uses React.js.

## Technology Stack
- Frontend: React.js  
- Backend: Node.js with Express.js  
- Database: MongoDB  
- Authentication: JWT-based authentication  

## Features
- User registration and login with JWT authentication
- Start Exam interface with randomized questions
- Display MCQs with options
- Next/Previous navigation for questions
- Countdown timer with auto-submit capability
- Submit exam functionality with score calculation
- Result display page  

## Folder Structure

exam-app/
│
├── backend/
│   ├── models/          # Mongoose models (User, Question, Result)
│   ├── routes/          # API routes (authRoutes, examRoutes)
│   ├── middleware/      # JWT auth middleware
│   ├── server.js        # Main server entry
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/         # API call functions
│   │   ├── components/  # React components (Exam, Auth, Timer)
│   │   ├── context/     # React context for auth
│   │   ├── pages/       # Pages (Login, StartExam, Results)
│   │   └── App.js
│   └── package.json
│
└── README.md



## Installation

### Backend

cd backend
npm install
npm start

### Frontend

cd frontend
npm install
npm start

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:5000`.

## API Endpoints

Auth

 `POST /api/auth/register` – Register a new user
 `POST /api/auth/login` – Login and receive JWT

Exam

 `GET /api/exam/start` – Fetch random questions (requires JWT)
 `POST /api/exam/submit` – Submit answers and calculate score (requires JWT)
 `GET /api/exam/results` – Get past results (requires JWT)

## Usage

1. Register a new account or login with existing credentials.
2. Click “Start Exam” to begin.
3. Navigate through questions using Next/Previous buttons.
4. Submit the exam manually or wait for the timer to auto-submit.
5. View results on the result page.

## Author

Name: KANNALI CHENCHU DEEPTHI
GitHub: (https://github.com/deepthi2363)

## License

This project is open-source and free to use for assessment purposes.

