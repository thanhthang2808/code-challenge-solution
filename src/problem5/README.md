# 🚀 Problem 5: A Crude Server - Express.js TypeScript CRUD API

## 📌 Overview
This is a RESTful API built using **Express.js** and **TypeScript**, providing full **CRUD** (Create, Read, Update, Delete) functionality. The API interacts with **MongoDB** using **Mongoose** and follows a structured and scalable architecture.

## 🌟 Features
- **TypeScript** support for robust and type-safe development
- **MongoDB** integration via **Mongoose ORM**
- **Express.js** for API handling
- **Environment variables** support using **dotenv**
- **CORS** and **Body-parser** middleware
- **Modular and scalable** project structure

## 🛠 Prerequisites
Before setting up the project, ensure you have the following installed:
- **Node.js** (>= 16.x)
- **MongoDB** (Local or Cloud, e.g., MongoDB Atlas)
- **Git** (Optional, for cloning the repository)

## 📥 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/thanhthang2808/code-challenge-solution.git
cd code-challenge-solution/src/problem5
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the project's root directory and add the following:
```env
PORT=5000
MONGO_URI=mongodb+srv://testingmtt2808:aCutePassword@clustertest.kfa38.mongodb.net/
```

### 4️⃣ Build the Project
Before running the project in production mode, compile the TypeScript files:
```sh
npm run build
```
This will generate a `dist/` directory containing the compiled JavaScript files.

### 5️⃣ Start the Server
#### **Development Mode (Auto-reload with Nodemon)**
```sh
npm run dev
```
#### **Production Mode**
```sh
npm start
```

## 🔗 API Endpoints
| Method | Endpoint           | Description               |
|--------|-------------------|---------------------------|
| POST   | `/api/resources`  | Create a new resource    |
| GET    | `/api/resources`  | Retrieve all resources   |
| GET    | `/api/resources/:id` | Retrieve a resource by ID |
| PUT    | `/api/resources/:id` | Update a resource        |
| DELETE | `/api/resources/:id` | Delete a resource        |

## 🧪 Running Tests
To execute the test suite, use:
```sh
npm test
```

## 📂 Project Structure
```
.
├── src/
│   ├── config/
│   │   ├── database.ts
│   ├── controllers/
│   │   ├── resourceController.ts
│   ├── models/
│   │   ├── resourceModel.ts
│   ├── routes/
│   │   ├── resourceRoutes.ts
│   ├── server.ts
├── dist/               # Compiled JavaScript files (after build)
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── README.md           # Project documentation
```

## 🎯 Additional Notes
- The **development server** runs with **nodemon**, allowing automatic restarts upon code changes.
- The **production server** runs from the **dist/** directory after TypeScript compilation.
- The `.env` file should **never be committed** to version control. Make sure to add it to **.gitignore**.

## 🤝 Contributing
Contributions are welcome! Feel free to submit pull requests or report issues.

## 📜 License
This project is licensed under the **MIT License**.

---
🎉 **Thank you!** 🎉

