import express from "express";
import getallbook  from "../Controller/book.controller.js"

const router = express.Router();

router.get('/', getallbook);

export default router;