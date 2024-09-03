import { Injectable } from "@nestjs/common";

@Injectable()
export default class TaskService {
    
    getTask() {
        return ["1", "4", "3", "2",]
    }
    createTask(task:any) {
        console.log (task)
        return "create taks"
    }
    updateTask() {
        return "task was updated"
    }
    deleteTask (){
        return "Task was deleted"
    }
}