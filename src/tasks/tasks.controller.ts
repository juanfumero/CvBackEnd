import { Body, Controller, Delete, Get, Param, Patch, Post, Response } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO, TaskDTO, UpdateTaskDTO } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {

    }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks()
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<TaskDTO> {
        //return await this.tasksService.getTaskById(id);
        return await this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(@Body() newTask: TaskDTO) {
        return this.tasksService.newTask(newTask);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.deleteTasks(id)
    }

    @Patch(":id")
    updateTask(@Param('id') id: string, @Body() updateFields: TaskDTO) {
        return this.tasksService.updateTasks(id, updateFields)
    }

}
