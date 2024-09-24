import { BaseEntity } from "src/base/base.entity";
import { Column, Entity } from "typeorm";

@Entity('Statement')
export class StatementEntity extends BaseEntity{

    @Column()
    userId: string;

    @Column()
    atmId: string;

    @Column()
    amount: number;
}