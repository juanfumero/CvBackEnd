import { Module } from '@nestjs/common';
import { TasksController } from './controller/tasks.controller';
import { TasksService } from './service/tasks.service';
import { TaskMapper } from './mapper/task.mapper';
import { TaskRepository } from './repository/task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entity/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService, TaskMapper, TaskRepository]
})
export class TasksModule {}
