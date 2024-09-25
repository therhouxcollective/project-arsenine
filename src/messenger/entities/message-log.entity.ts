import { BaseEntity } from "src/base/base.entity";
import { Column, Entity } from "typeorm";

@Entity('MessageLog')
export class MessageLogEntity extends BaseEntity {

    @Column()
    userId: string;

    @Column()
    payload: string;

    @Column()
    cmd: string;
}