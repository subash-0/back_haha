import express from "express";
import {
  createQuestion,
  getAllQuestions,
  getQuestionDetails,
  createAnswer,
} from "../controllers/qnaController.js";

import { authenticateUser } from "../middleware/authentication.js";

const router = express.Router();

router.get("/", getAllQuestions);

router.post("/", authenticateUser, createQuestion);

router.get("/:id", getQuestionDetails);

router.post("/:id/answers", authenticateUser, createAnswer);

export default router;
