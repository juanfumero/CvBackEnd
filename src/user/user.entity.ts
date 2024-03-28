import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({
        unique: false,
        nullable: false
    })
    readonly idusername: string
    
    @Column({
        unique: false,
        nullable: false
    })
    readonly username: string

    @Column({
        unique: false
    })
    readonly phone: string

    @Column({
        unique: false
    })
    readonly email: string

    @Column({
        unique: false
    })
    readonly address: string


    constructor(id: string, idusername: string, username: string, phone: string, email: string, address: string) {
        this.id = id;
        this.idusername = idusername;
        this.username = username;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }
}