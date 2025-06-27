//POSTgreSQL table initialiser script -- it helps your node.js app automatically create the users table when ir starts
import pool from "../config/db.js";

const createUserTable = async() => {
    const queryText = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email Varchar(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT NOW()
)
    `
    try {
        await pool.query(queryText);
        console.log("User Table created if exists");
    } catch (error) {
        console.log("Error creating users table", error);
    }
}

export default createUserTable;