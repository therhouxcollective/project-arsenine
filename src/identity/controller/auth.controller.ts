import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { Observable, of } from 'rxjs';
import { DataResponse } from 'src/base/response';
import { AuthService } from 'src/identity/services/auth.service';
import { MessageModel } from 'src/messenger/models/message.model';

/**
 * This controller acts as a pub-sub for the  account authentication functionality
 */
@Controller('auth')
export class AuthController {
  /**
   * 
   * @param authService 
   */
  constructor(public authService: AuthService) { }

  /**
   * 
   * @param data The user payload
   * @returns {Observable} Publishes the login token to the user
   */
  @MessagePattern('login-user')
  login$(@Payload() data: MessageModel<any>): Observable<DataResponse<any>> {
    return this.authService.login$(data.payload);
  }

  /**
   * 
   * @param data The account payload
   * @returns {Observable} Publishes the user id
   */
  @MessagePattern('get-user-id')
  userId$(@Payload() data: MessageModel<any>): Observable<DataResponse<any>> {
    return this.authService.getUserId$(data.userId);
  }


  /**
   * 
   * @param data The account payload
   * @returns {Observable} Publishes the logout response to the system, and releases their token
   */
  @MessagePattern('logout-user')
  logout$(@Payload() data: MessageModel<any>): Observable<DataResponse<any>> {
    return this.authService.logout$(data.userId);
  }


  /**
   * 
   * @param data The account payload
   * @returns {Observable} Publishes the statement from the publisher
   */
  @MessagePattern('new-user')
  newUser$(@Payload() data: MessageModel<any>): Observable<DataResponse<any>> {
    return this.authService.createUser$(data.payload);
  }
}
