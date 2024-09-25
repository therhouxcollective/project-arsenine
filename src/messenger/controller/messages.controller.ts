import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  EventPattern,
  Payload,
  Ctx,
  NatsContext,
} from '@nestjs/microservices';
import { Observable, of } from 'rxjs';
import { MessagesService } from 'src/messenger/services/messages.service';
import { MessageModel } from '../models/message.model';

@Controller('messages')
export class MessagesController {
  /**
   * 
   * @param messagingService That's the system's messaging service
   */
  constructor(public messagingService: MessagesService) { }
  /**
   * 
   * @param data The payload
   * @param context The MQ context
   * @returns {Observable<MessageModel>} The response from the Messaging Queue
    */
  @MessagePattern('login')
  login(@Payload() data: MessageModel<any>, @Ctx() context: NatsContext) {

    return this.messagingService.broadcastMessage$('', 'login-user', data);
  }

  /**
 * 
 * @param data The payload
 * @param context The MQ context
 * @returns {Observable<MessageModel>} The response from the Messaging Queue
 */
  @MessagePattern('logout')
  logout(@Payload() data: MessageModel<any>, @Ctx() context: NatsContext) {

    return this.messagingService.broadcastMessage$('', 'logout-user', data);
  }

  /**
 * 
 * @param data The payload
 * @param context The MQ context
 * @returns {Observable<MessageModel>} The response from the Messaging Queue
 */
  @MessagePattern('create-account')
  newAccount(@Payload() data: MessageModel<any>, @Ctx() context: NatsContext) {

    return this.messagingService.broadcastMessage$('', 'new-user', data);
  }

  /**
 * 
 * @param data The payload
 * @param context The MQ context
 * @returns {Observable<MessageModel>} The response from the Messaging Queue
 */
  @MessagePattern('get-statement')
  getStatement$(@Payload() data: MessageModel<any>, @Ctx() context: NatsContext) {
    return this.messagingService.broadcastMessage$('', 'account-statement', data);
  }
  /**
   * 
   * @param data the payload
   * @param context The MQ context
   * @returns {Observable<MessageModel>} The response from the Messaging Queue
   */
  @MessagePattern('get-balance')
  getbalance$(@Payload() data: MessageModel<any>, @Ctx() context: NatsContext) {
    return this.messagingService.broadcastMessage$('', 'account-balance', data);
  }
  /**
   * 
   * @param data the payload
   * @param context The MQ context
   * @returns {Observable<MessageModel>} The response from the Messaging Queue
   */
  @MessagePattern('deposit-amount')
  depaositAmount$(@Payload() data: MessageModel<any>, @Ctx() context: NatsContext) {
    return this.messagingService.broadcastMessage$('', 'account-deposit', data);
  }
  /**
   * 
   * @param data  the payload
   * @param context The MQ context
   * @returns {Observable<MessageModel>} The response from the Messaging Queue
   */
  @MessagePattern('withdraw-amount')
  withdrawAmount$(@Payload() data: MessageModel<any>, @Ctx() context: NatsContext) {
    return this.messagingService.broadcastMessage$('', 'account-withdraw', data);
  }
}
