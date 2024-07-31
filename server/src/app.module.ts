import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [TaskModule, ProjectModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
