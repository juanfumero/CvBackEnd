import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

@Entity('task')
export class Task {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string
    
    @Column({
        unique: false
    })
    readonly title: string

    @Column({
        unique: false
    })
    readonly description: string

    @Column({
        unique: false
    })
    readonly status?: TaskStatus

    constructor(id: string, title: string, description: string, status: TaskStatus) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}