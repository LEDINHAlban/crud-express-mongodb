# 📌 CRUD API with Express, MongoDB, and Mongoose

This project is a simple REST API using Node.js, Express, MongoDB, and Mongoose to perform CRUD operations (Create, Read, Update, Delete).

## 🚀 Installation and Setup

### 1️⃣ Clone the Project

git clone https://github.com/your-repo/crud-express-mongodb.git
cd crud-express-mongodb

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Set Up Environment Variables

Create a .env file in the root directory and add:

PORT=5000  
MONGO_URI=mongodb://localhost:27017/mydatabase

⚠️ Make sure MongoDB is installed and running.

### 4️⃣ Start the Server in Development Mode

npm run dev

The server will be accessible at http://localhost:5000.

## 📌 Available Routes

### 🔹 CRUD for Items

GET /api/items → Retrieve all items

GET /api/items/:id → Retrieve an item by ID

POST /api/items → Create a new item

PUT /api/items/:id → Update an item

DELETE /api/items/:id → Delete an item

### 🔹 Test Route

GET / → Returns a welcome message

### 🛠 Technologies Used

Node.js

Express.js

MongoDB

Mongoose

Dotenv (for environment variables management)

Cors (to handle cross-origin requests)

