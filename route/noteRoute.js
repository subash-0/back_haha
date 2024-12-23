import express from "express";
const router = express.Router();

import {
  createNote,
  updateNote,
  deleteNote,
  getNotes,
} from "../controllers/noteController.js";

router.get("/", getNotes);
router.post("/", createNote);
router.delete("/", deleteNote);
router.patch("/", updateNote);

export default router;
