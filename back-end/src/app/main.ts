import express, { Application } from "express";
import cors from "cors"
import TaskRouter from "../routes/gpt.routes";

export class App {
    private app: Application;
    constructor(private port?: string | number) {
        this.app = express();
        this.settings();
        this.middleware();
        this.Routes();
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
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000)
    }
    async listen() {
        await this.app.listen(this.app.get('port'))
        console.log(`Port listen in ${this.app.get(`port`)}`)
    }
}