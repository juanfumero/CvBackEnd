import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserMapper } from './user.mapper';
import { UserDTO } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        private userRepository: UserRepository,
        private mapper: UserMapper
        ){}

    async getAllUser(): Promise<UserDTO[]> {
        const user: User[] = await this.userRepository.getAllUsers()
        return user.map(tasks => this.mapper.entityToDto(tasks));
    }

    async getUserById(id: string): Promise<UserDTO> {
        const task: User = await this.userRepository.getUserById(id);
        return this.mapper.entityToDto(task);
    }


    async newUser(userDTO: UserDTO): Promise<UserDTO> {
        const newTask: User = await this.userRepository.newUser(userDTO);
        return this.mapper.entityToDto(newTask);
    }


    async updateUsers(id: string, userDTO: UserDTO): Promise<UserDTO> {
        const updateTask = await this.userRepository.updateUser(id, userDTO);
        return this.mapper.entityToDto(updateTask);
    }

    async deleteTasks(id: string): Promise<void> {
        await this.userRepository.deleteUser(id);
    }

}
