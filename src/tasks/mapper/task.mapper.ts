import { Injectable } from "@nestjs/common";
import { Task } from "../entity/task.entity";
import { TaskDTO } from "../dto/task.dto";

@Injectable()
export class TaskMapper {

    dtoToEntity(taskDTO: TaskDTO): Task {
        return new Task(taskDTO.id, taskDTO.title, taskDTO.description, taskDTO.status);
    }

    entityToDto(tastEntity: Task): TaskDTO {
        return new TaskDTO(tastEntity.id, tastEntity.title, tastEntity.description, tastEntity.status);
    }

}