import express from "express";

import {
  getMessages,
  sendMessage,
} from "../controllers/messageController.js";

const router = express.Router();

// GET /api/messages
router.get("/", getMessages);

// POST /api/messages
router.post("/", sendMessage);

export default router;