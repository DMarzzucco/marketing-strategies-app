import { Module } from "@nestjs/common";
import { TaskController, TaskService } from "./index";

@Module({
    controllers: [TaskController],
    providers:[TaskService]
})
export default class TaskModule {}