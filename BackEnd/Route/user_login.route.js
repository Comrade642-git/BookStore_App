import express from "express"
import login from "../Controller/user_login.controller.js"

const router = express.Router();
router.post("/login", login);
export default router;