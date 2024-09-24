import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { of } from 'rxjs';
import { AuthService } from 'src/identity/services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(public authService: AuthService){}
    @MessagePattern('login-user')
    login(@Payload() data: any) {
      return this.authService.login$(data.payload);
    }

    @MessagePattern('get-user-id')
    userId(@Payload() data: any) {
      console.log('uid',data);
      return this.authService.getUserId$(data.userId);
    }

    @MessagePattern('logout-user')
    logout(@Payload() data: any) {
      return this.authService.logout$(data.userId);
    }

    @MessagePattern('new-user')
    newUser(@Payload() data: any) {
      return this.authService.createUser$(data.payload);
    }
}
