
import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Index } from 'typeorm';
import { BaseDto } from './base.dto';

export class BaseEntity implements BaseDto {
    @Index()
    @PrimaryGeneratedColumn() 
    id: string;

    @CreateDateColumn() 
    createdDate: Date;
    
    @UpdateDateColumn() 
    modifiedDate: Date;
    
    @DeleteDateColumn() 
    deletedDate: Date;
}