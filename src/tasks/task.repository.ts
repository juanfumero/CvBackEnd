import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./task.entity";
import { DeleteResult, FindOneOptions, Repository } from "typeorm";
import { TaskMapper } from "./task.mapper";
import { TaskDTO } from "./dto/task.dto";

@Injectable()
export class TaskRepository {

    constructor(
        @InjectRepository(Task) 
              private taskRepository: Repository<Task>,
        private mapper: TaskMapper){}

    getAllTasks(): Promise<Task[]> {
        return this.taskRepository.find();
    }

    getTaskById(id: string): Promise<Task> {
        const options: FindOneOptions<Task> = {
            where: {
                id: id
            }
        };
        return this.taskRepository.findOne(options);
    }

    async newTask(taskDTO: TaskDTO): Promise<Task> {
        //const newUser = this.mapper.dtoToEntity(taskDTO);
        return this.taskRepository.save(taskDTO);
    }

    async updateTask(id: string, taskDTO: TaskDTO): Promise<Task> {
        const updateUser = this.mapper.dtoToEntity(taskDTO);
        await this.taskRepository.update(taskDTO.id, updateUser);
        const options: FindOneOptions<Task> = {
            where: {
                id: id
            }
        };
        return this.taskRepository.findOne(options);

    }

    deleteTask(id: string): Promise<DeleteResult> {
       return this.taskRepository.delete(id);
    }

}