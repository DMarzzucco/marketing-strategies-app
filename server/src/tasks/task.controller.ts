import { Controller, Delete, Get, Post, Put, Body } from "@nestjs/common";
import TaskService from "./task.service";

@Controller("/task")

export default class TaskController {
    constructor(private Service: TaskService) { }

    @Get()
    getAllTasks() {
        return this.Service.getTask();
    }

    @Post()
    createTask(@Body() task: any) {
        console.log (task)
        return this.Service.createTask(task);
    }

    @Delete()
    deleteTask() {
        return this.Service.deleteTask();
    }

    @Put()
    updateTask() {
        return this.Service.updateTask();
    }

}