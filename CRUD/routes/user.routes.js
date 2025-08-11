import { Router } from "express";
import {
  createUser,
  getUser,
  getUsers,
  removeUser,
  updateUser,
} from "../controllers/user.controller.js";
import { loggerMiddleware } from "../middleware/logger.middleware.js";
import { validateUser } from "../middleware/validateUser.middleware.js";

const router = Router();

router.use(loggerMiddleware);
router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", removeUser);

export default router;
