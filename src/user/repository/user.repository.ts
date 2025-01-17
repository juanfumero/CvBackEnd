import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, FindOneOptions, Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { UserDTO } from "../dto/user.dto";
import { UserMapper } from "../mapper/user.mapper";

@Injectable()
export class UserRepository {

    constructor(
        @InjectRepository(User) 
              private userRepository: Repository<User>,
        private mapper: UserMapper){}

    getAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    getUserById(id: string): Promise<User> {
        const options: FindOneOptions<User> = {
            where: {
                idusername: id
            }
        };
        return this.userRepository.findOne(options);
    }

    async newUser(userDTO: UserDTO): Promise<User> {
        //const newUser = this.mapper.dtoToEntity(taskDTO);
        return this.userRepository.save(userDTO);
    }

    async updateUser(id: string, userDTO: UserDTO): Promise<User> {
        const updateUser = this.mapper.dtoToEntity(userDTO);
        await this.userRepository.update(userDTO.id, updateUser);
        const options: FindOneOptions<User> = {
            where: {
                idusername: id
            }
        };
        return this.userRepository.findOne(options);

    }

    deleteUser(id: string): Promise<DeleteResult> {
       return this.userRepository.delete(id);
    }

}