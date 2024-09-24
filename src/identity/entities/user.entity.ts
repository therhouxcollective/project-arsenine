import { BaseEntity } from "src/base/base.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, UpdateDateColumn } from "typeorm";

@Entity('User')
export class UserEntity extends BaseEntity{

    @Column()
    username: string;

    @Column()
    name: string;

    @Column()
    surname: string;


    @Column()
    password: string;    
}