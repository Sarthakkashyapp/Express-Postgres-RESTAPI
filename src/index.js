import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

//call the function to create table
createUserTable();

// Routes here
app.use("/api", userRoutes);

// Error handling middleware
app.use(errorHandler);


//testing databse connection
app.get("/", async(req, res) => {
    const result =await pool.query("SELECT current_database()");
    res.send(`Database name is: ${result.rows[0].current_database}`);
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
