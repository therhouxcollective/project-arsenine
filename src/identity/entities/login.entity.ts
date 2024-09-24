
import { BaseEntity } from "src/base/base.entity";
import { Column, Entity } from "typeorm";

@Entity('Login')
export class LoginEntity extends BaseEntity{

    @Column()
    userId: string;


    @Column()
    loginToken: string;
}