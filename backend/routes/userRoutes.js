import express from "express";
const router = express.Router();
import {
  registerUser,
  authUser,
  allUsers,
} from "../controllers/userController";
import auth from "../middleware/authMiddleware";

router.get("/", auth, allUsers);
router.post("/", registerUser);
router.post("/login", authUser);

export default router;
