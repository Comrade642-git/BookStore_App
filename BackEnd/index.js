import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Bookroute from "./Route/book.route.js";
import user_signup_route from './Route/user_signup.route.js';
import user_login_route from "./Route/user_login.route.js";
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 4000;
const URL = process.env.MONGODBURL;

// Connect to MongoDB
try {
    mongoose.connect(URL);
    console.log("Database Connected");
} catch (error) {
    console.log("Error:", error);
}

// Defining Routes
app.use('/books', Bookroute);
app.use("/user", user_signup_route);
app.use("/user", user_login_route);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
