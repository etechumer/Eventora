# Eventora

Eventora is a full-stack event booking platform built with a React + Vite frontend and an Express + MongoDB backend. It supports user registration, OTP-based verification, event browsing, booking requests, and admin event management.

## Features

- User registration and login with JWT authentication
- OTP-based email verification for account activation and booking actions
- Event listing with searching and filtering
- Event detail view with booking flow and seat availability
- User dashboard showing booking requests and cancellation
- Admin dashboard for creating events, approving bookings, and deleting events
- Email notifications for OTP and booking confirmations

## Architecture

- `client/` — React frontend using Vite, Tailwind CSS, and React Router
- `server/` — Express backend with MongoDB via Mongoose
- `server/src` — server application source code
- `server/src/models` — MongoDB schemas
- `server/src/controllers` — API logic
- `server/src/routes` — route definitions
- `server/src/middleware` — authentication middleware
- `server/src/utils` — email helper utilities

## Folder structure

```
Eventora/
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── context/AuthContext.jsx
│   │   ├── components/Navbar.jsx
│   │   ├── pages/*.jsx
│   │   └── utils/axios.js
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── server/
│   ├── src/
│   │   ├── app.js
│   │   ├── db/db.js
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/email.js
│   ├── package.json
│   ├── server.js
│   ├── seed.js
│   └── .env
└── README.md
```

## Prerequisites

- Node.js 18+ or latest stable release
- npm
- MongoDB (local or Atlas)
- Gmail account credentials for email sending

## Backend setup

1. Open a terminal in `server/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `server/` with the following values:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_gmail_address
   EMAIL_PASS=your_gmail_app_password
   PORT=5000
   ```
4. Start the backend in development mode:
   ```bash
   npm run dev
   ```

## Frontend setup

1. Open a terminal in `client/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend dev server:
   ```bash
   npm run dev
   ```
4. Open the app in your browser at the URL shown by Vite (usually `http://localhost:5173`).

## Available backend scripts

- `npm start` — run the server with Node
- `npm run dev` — run the server with Nodemon (auto reload)

## Available frontend scripts

- `npm run dev` — start Vite development server
- `npm run build` — build the production frontend bundle
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## API Endpoints

### Auth

- `POST /api/auth/register` — register a user and send verification OTP
- `POST /api/auth/login` — login and return JWT
- `POST /api/auth/verify-otp` — verify OTP and activate account

### Events

- `GET /api/events` — list events
- `GET /api/events/:id` — get event details
- `POST /api/events` — create event (admin only)
- `PUT /api/events/:id` — update event (admin only)
- `DELETE /api/events/:id` — delete event (admin only)

### Bookings

- `POST /api/bookings/send-otp` — send booking OTP to user email
- `POST /api/bookings` — create booking request with OTP
- `PUT /api/bookings/:id/confirm` — confirm booking and send email (admin only)
- `GET /api/bookings/my` — fetch bookings for current user or admin
- `DELETE /api/bookings/:id` — cancel booking

## Environment variables

### `server/.env`

- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — JSON Web Token secret key
- `EMAIL_USER` — email address used to send OTP/booking emails
- `EMAIL_PASS` — email app password or SMTP password
- `PORT` — backend server port

## Notes

- The frontend uses `http://localhost:5000/api` as the backend base URL.
- Admin-only routes are protected by JWT and `admin` role checks.
- OTP codes expire after 5 minutes.
- Do not commit `.env` or any secret credentials.

## Recommended workflow

1. Set up backend env variables.
2. Start MongoDB and backend server.
3. Start frontend dev server.
4. Register a new user, verify OTP, and browse events.
5. Use admin account to create events and confirm bookings.

---

Happy building with Eventora!