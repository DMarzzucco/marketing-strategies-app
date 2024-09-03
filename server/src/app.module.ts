import { Module } from '@nestjs/common';
import { TaskModule, TaskService, TaskController } from './tasks';

@Module({
  imports: [TaskModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule { }
