# Instruction

This project enhances the functionality of the midterm project by integrating a backend and database, ensuring that data persists across page refreshes.

## Prerequisites
Before you start, ensure you have MongoDB installed on your machine, as the backend requires a MongoDB database to function.

## How to Run

Follow these steps to get the application running on your local machine:

### Start the Frontend
1. Open a terminal window.
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies (if running for the first time):
   ```bash
   npm install
   ```
4. Start the frontend application:
   ```bash
   npm start
   ```
   This command will launch the web interface on `http://localhost:3000`.

### Start the Backend
1. Open another terminal window.
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Ensure MongoDB is running on your system.
4. Start the backend server:
   ```bash
   node take-note.js
   ```
   The backend server will start and connect to MongoDB.

After following these steps, the application should be fully functional, and you can interact with it through your web browser at `http://localhost:3000`.
