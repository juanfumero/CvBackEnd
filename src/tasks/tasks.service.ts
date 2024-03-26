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


    private tasks: Task[] = [
        {
            id: '1',
            title: 'first task',
            description: 'prueba',
            status: TaskStatus.PENDING
        }
    ];

    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }

    // createTasks(title: string, description: string) {
    //     const task: Task = {
    //         id: new Date().toISOString(),
    //         title,
    //         description,
    //         status: TaskStatus.PENDING
    //     }
    //     this.tasks.push(task);
        
    //     return task;
    // }

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

    // deleteTasks(id: string): any {
    //    this.tasks = this.tasks.filter(task => task.id !== id);
    //    return { result: "Borrado con exito" }
    // }

    // getTaskById(id: string): Task {
    //   return this.tasks.find(task => task.id === id);
    // }

    // updateTasks(id: string, updatedFields: UpdateTaskDTO): Task {
    //     const task = this.getTaskById(id)
    //     const newTask = Object.assign(task, updatedFields);
    //     this.tasks = this.tasks.map(task => task.id === id ? newTask : task);
    //     return newTask;
    //  }

}
