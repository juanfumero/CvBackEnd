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