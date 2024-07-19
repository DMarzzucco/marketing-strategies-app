import { Router } from "express";
import { generateChat } from "../controllers/gpt.controller";

const TaskRouter = Router()

TaskRouter.post("/task", generateChat);

export default TaskRouter;