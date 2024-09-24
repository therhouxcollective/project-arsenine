import { Module } from '@nestjs/common';
import { MessagesController } from './controller/messages/messages.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageLogEntity } from './entities/message-log.entity';
import { MessagesService } from './services/messages.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MessageLogEntity]),
    ClientsModule.register([
      {
        name: 'banking',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
          
        }
      },
    ]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
  exports: [MessagesService]
})
export class MessengerModule { }
