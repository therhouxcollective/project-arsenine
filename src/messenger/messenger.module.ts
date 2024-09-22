import { Module } from '@nestjs/common';
import { MessagesController } from './controller/messages/messages.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
          {
            name: 'help.please',
            transport: Transport.NATS,
            options: {
              servers: ['nats://localhost:4222'],
            }
          },
        ]),
      ],
    controllers: [MessagesController],
})
export class MessengerModule {}
