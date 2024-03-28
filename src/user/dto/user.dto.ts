import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"


export class UserDTO {

    readonly id?: string;

    @IsString()
    @IsNotEmpty()
    idusername?: string

    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsOptional()
    email: string

    @IsString()
    @IsOptional()
    address: string
    
    constructor(id:string, idusername: string,  username: string, phone: string, email: string, address: string) {
        this.id = id;
        this.idusername = idusername;
        this.username = username;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }
}

