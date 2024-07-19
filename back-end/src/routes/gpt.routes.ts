import { Router } from "express";
import { generateChat } from "../controllers/gpt.controller";
import { validatePromt } from "../middleware/validators/chat.validator";

const TaskRouter = Router()

TaskRouter.post("/gpt", validatePromt, generateChat);

export default TaskRouter;