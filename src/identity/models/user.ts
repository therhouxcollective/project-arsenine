import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from 'src/base/base.dto';

export class UserDto extends BaseDto {
    //@ApiProperty() public id: string;
    @ApiProperty() public username: string;
    @ApiProperty() public surname: string;

    @ApiProperty() public name: string;
    @ApiProperty() public password: string;

}
export class LoginCredentials {
    @ApiProperty() public username: string;
    @ApiProperty() public password: string;
}