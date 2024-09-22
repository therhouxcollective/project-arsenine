import { Controller } from '@nestjs/common';
import {
    MessagePattern,
    EventPattern,
    Payload,
    Ctx,
    NatsContext,
  } from '@nestjs/microservices';

@Controller('messages')
export class MessagesController {
    @MessagePattern('help.please')
    getCustomers(@Payload() data: any, @Ctx() context: NatsContext) {
      console.log(context);
      
    }
  
}
