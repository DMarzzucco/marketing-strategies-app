import express, { Application } from "express";
import cors from "cors"
import TaskRouter from "../routes/gpt.routes";
import { errorHandler } from "../middleware/ErrorHandler";

export class App {
    private app: Application;
    constructor(private port?: string | number) {
        this.app = express();
        this.settings();
        this.middleware();
        this.Routes();
        // this.errorHandling();
    }
    private middleware() {
        this.app.use(cors({
            origin: "*",
            credentials: true
        }))
        this.app.use(express.json())
    }
    private Routes(): void {
        this.app.use("/api", TaskRouter);
        this.app.use(errorHandler)
    }
    // prueba
    // private errorHandling() {
    //     this.app.use(errorHandler)
    // }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000)
    }
    async listen() {
        await this.app.listen(this.app.get('port'))
        console.log(`Port listen in ${this.app.get(`port`)}`)
    }
}