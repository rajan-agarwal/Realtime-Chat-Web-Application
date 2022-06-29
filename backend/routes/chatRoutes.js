import express from "express";
const router = express.Router();
import {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} from "../controllers/chatController";

import auth from "../middleware/authMiddleware";

router.post("/", auth, accessChat);
router.get("/", auth, fetchChats);
router.post("/group", auth, createGroupChat);
router.put("/rename", auth, renameGroup);
router.put("/groupremove", auth, removeFromGroup);
router.put("/groupadd", auth, addToGroup);




export default router;
