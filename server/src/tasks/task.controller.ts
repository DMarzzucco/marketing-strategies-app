import { Controller, Get, HttpStatus } from "@nestjs/common";

@Controller({})
export class TaskController {

    @Get("/tasks")
    getAllTasks() {
        return "all tasks"
    }

    @Get("/batroshka")
    postGet(id: number) {
        const code = id
        if (!code){
            HttpStatus.PAYMENT_REQUIRED
        }
    }
}