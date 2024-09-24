import { ApiProperty } from "@nestjs/swagger";

export class TransactionDto{
    @ApiProperty() public amount: number;
    @ApiProperty() public atmId: string; 

}