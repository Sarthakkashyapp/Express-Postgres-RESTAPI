# Express + PostgreSQL REST API

A simple, efficient RESTful API built using **Node.js**, **Express**, and **PostgreSQL**, all containerized with **Docker** and managed via **Docker Compose**.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Containerization:** Docker, Docker Compose

---

## 📁 Folder Structure

├── Dockerfile <br>
├── docker-compose.yml <br>
├── .gitignore <br>
├── .env # Optional (DB credentials) <br>
├── package.json <br>
├── src/ <br>
│ ├── index.js <br>
│ └── db/ <br>
│ └── db.js <br>
└── README.md 


---

## 🧪 Features

- 🔁 Full CRUD operations
- 🐘 PostgreSQL integration
- 🐳 Dockerized setup
- 📦 Clean and modular codebase
- 📫 Tested with Postman

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Docker
- pg (PostgreSQL driver)

---

## 🧾 Getting Started

### ⚙️ Environment Variables

Create a `.env` file in the root directory with the following:

```env
DB_USER=your_db_user
DB_PASSWORD=your_secure_password
DB_NAME=your_db_name
DB_PORT=5432
```

---

## 🐳 Run with Docker

```bash
docker-compose up --build
```
- Build the backend Docker image
- Spin up a PostgreSQL container
- Automatically create the users table (if it doesn’t exist)

## 📮 Sample API Endpoints

-Method	  Endpoint	  Description         <br>
-GET	    /users	    Get all users       <br>
-POST	    /users	    Add a new user      <br>
-PUT	    /users/:id	Update user by ID   <br>
-DELETE	  /users/:id	Delete user by ID   <br>

-Test using Postman.

## 🧹 Clean Up
- To stop and remove containers, run:

```bash
docker-compose down



