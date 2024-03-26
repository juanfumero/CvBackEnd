import { TaskStatus } from "../task.entity"
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

export class CreateTaskDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(15)
    title: string

    @IsString()
    @IsNotEmpty()
    description: string
}

export class TaskDTO {
    readonly id?: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(15)
    title: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus

    
    constructor(id: string, title: string, description: string, status: TaskStatus) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

export class UpdateTaskDTO {
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus
}