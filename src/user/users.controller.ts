import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Response } from '@nestjs/common';
import { UserService } from './users.service';
import { UserDTO } from './dto/user.dto';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {

    }

    @Get()
    getAllUsers() {
        return this.userService.getAllUser()
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<UserDTO> {
        let res: any = {
            result: null
        }
        res.result = await this.userService.getUserById(id);
        return res;
    }

    @Post()
    createUser(@Body() newUser: UserDTO) {
        if (!newUser.id) {
            throw new BadRequestException('El campo idUser es obligatorio');
        }
      
        return this.userService.newUser(newUser);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteTasks(id)
    }

    @Patch(":id")
    updateUser(@Param('id') id: string, @Body() updateFields: UserDTO) {
        if (!updateFields.id) {
            throw new BadRequestException('El campo idUser es obligatorio');
        }
      
        return this.userService.updateUsers(id, updateFields)
    }

}