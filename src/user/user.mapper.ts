import { Injectable } from "@nestjs/common";
import { UserDTO } from "./dto/user.dto";
import { User } from "./user.entity";
@Injectable()
export class UserMapper {

    dtoToEntity(userDTO: UserDTO): User {
        return new User(userDTO.id, userDTO.idusername, userDTO.username, userDTO.phone, userDTO.email, userDTO.address);
    }

    entityToDto(userEntity: User): UserDTO {
        return new UserDTO(userEntity.id, userEntity.idusername, userEntity.username, userEntity.phone, userEntity.email, userEntity.address);
    }

}

