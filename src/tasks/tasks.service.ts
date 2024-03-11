import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { UpdateTaskDTO } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [
        {
            id: '1',
            title: 'first task',
            description: 'prueba pildora',
            status: TaskStatus.PENDING
        }
    ];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTasks(title: string, description: string) {
        const task: Task = {
            id: new Date().toISOString(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task);
        return task;
    }

    deleteTasks(id: string): any {
       this.tasks = this.tasks.filter(task => task.id !== id);
       return { result: "Borrado con exito" }
    }

    getTaskById(id: string): Task {
      return this.tasks.find(task => task.id === id);
    }

    updateTasks(id: string, updatedFields: UpdateTaskDTO): Task {
        const task = this.getTaskById(id)
        const newTask = Object.assign(task, updatedFields);
        this.tasks = this.tasks.map(task => task.id === id ? newTask : task);
        return newTask;
     }

}
