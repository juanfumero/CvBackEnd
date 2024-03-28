import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { TaskDTO, UpdateTaskDTO } from './dto/task.dto';
import { TaskRepository } from './task.repository';
import { TaskMapper } from './task.mapper';

@Injectable()
export class TasksService {

    constructor(
        private taskRepository: TaskRepository,
        private mapper: TaskMapper
        ){}

    async getAllTasks(): Promise<TaskDTO[]> {
        const task: Task[] = await this.taskRepository.getAllTasks()
        return task.map(tasks => this.mapper.entityToDto(tasks));
    }

    async getTaskById(id: string): Promise<TaskDTO> {
        const task: Task = await this.taskRepository.getTaskById(id);
        return this.mapper.entityToDto(task);
    }


    async newTask(taskDTO: TaskDTO): Promise<TaskDTO> {
        const newTask: Task = await this.taskRepository.newTask(taskDTO);
        return this.mapper.entityToDto(newTask);
    }


    async updateTasks(id: string, taskDTO: TaskDTO): Promise<TaskDTO> {
        const updateTask = await this.taskRepository.updateTask(id, taskDTO);
        return this.mapper.entityToDto(updateTask);
    }

    async deleteTasks(id: string): Promise<void> {
        await this.taskRepository.deleteTask(id);
    }

}
