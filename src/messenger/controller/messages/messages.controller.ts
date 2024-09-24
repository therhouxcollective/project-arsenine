import { Controller } from '@nestjs/common';
import {
    MessagePattern,
    EventPattern,
    Payload,
    Ctx,
    NatsContext,
  } from '@nestjs/microservices';
import { of } from 'rxjs';
import { MessagesService } from 'src/messenger/services/messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagingService: MessagesService){}

  @MessagePattern('login')
  login(@Payload() data: any, @Ctx() context: NatsContext) {
    
    return this.messagingService.broadcastMessage$('', 'login-user', data);
  }
  
  @MessagePattern('logout')
  logout(@Payload() data: any, @Ctx() context: NatsContext) {
    
    return this.messagingService.broadcastMessage$('', 'logout-user', data);
  }
  
  @MessagePattern('create-account')
  newAccount(@Payload() data: any, @Ctx() context: NatsContext) {
    
    return this.messagingService.broadcastMessage$('', 'new-user', data);
  }
  
  @MessagePattern('get-statement')
  getStatement(@Payload() data: any, @Ctx() context: NatsContext) {
    return this.messagingService.broadcastMessage$('', 'account-statement', data);
  }

  @MessagePattern('get-balance')
  getbalance(@Payload() data: any, @Ctx() context: NatsContext) {
    return this.messagingService.broadcastMessage$('', 'account-balance', data);
  }
  
  @MessagePattern('deposit-amount')
  depaositAmount(@Payload() data: any, @Ctx() context: NatsContext) {
    return this.messagingService.broadcastMessage$('', 'account-deposit', data);
  }
  
  @MessagePattern('withdraw-amount')
  withdrawAmount(@Payload() data: any, @Ctx() context: NatsContext) {
    return this.messagingService.broadcastMessage$('', 'account-withdraw', data);
  }
}
