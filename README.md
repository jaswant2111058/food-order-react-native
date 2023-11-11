# Food Ordering Mobile App

This repository contains the implementation of a food-ordering mobile app using React Native Expo for the frontend and Node.js with Express.js for the backend.

## Requirements

To meet the specifications of the project, the following requirements have been implemented:

### Backend (Node.js and Express.js)

1. **RESTful API:**
   - Implemented a RESTful API using Node.js and Express.js.
   - Handled various endpoints for managing food items, user authentication, and search functionality.

2. **User Authentication and Authorization:**
   - Implemented user authentication and authorization using JSON Web Tokens (JWT) for secure access to protected routes.

3. **Error Handling and Validation:**
   - Implemented proper error handling and validation for API requests and responses to ensure a robust and secure backend.

4. **Food Search:**
   - Users can search for food items based on filters such as price, name, and type.

### Frontend (React Native Expo and styled-components)

1. **UI Design:**
   - Developed the frontend using React Native Expo for a cross-platform mobile application.
   - Utilized styled-components for styling to maintain a clean and modular codebase.

2. **Integration with Backend:**
   - Integrated the frontend with the backend API to fetch and display food items.
   - Implemented user authentication flow to allow secure access to user-specific features.

## How to Run

Follow these steps to run the project locally:

 ### Frontend (React Native Expo)

1. install global expo if not install.
   ```bash
   npm install -g expo-cli
   ```

2. Install dependencies.
   ```bash
   npm install
   ```

3. Start the server.
   ```bash
   npm start
   ```
4. scan qr code through your mobile expo app

5. Follow the Expo CLI instructions to run the app on an emulator, simulator, or physical device.


The backend server will run on `http://localhost:5000`.

### backend (node js)

1. Navigate to the `backend` directory.
   ```bash
   cd server
   ```

2. Install dependencies.
   ```bash
   npm install
   ```
3. setup .env

4. Start the Expo development server.
   ```bash
   npm start
   ```
