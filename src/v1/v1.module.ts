import { Module } from '@nestjs/common';
import {V1Controller } from './controllers/v1/v1.controller';
import { MessengerModule } from 'src/messenger/messenger.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BankingGatewayService } from './services/banking.service';

@Module({
    imports: [ClientsModule.register([
        {
            name: 'banking',
          transport: Transport.NATS,
          options: {
            servers: ['nats://localhost:4222'],
            //host: '127.0.0.1',
            //port: 8888,
          },
        }]),],
    controllers: [V1Controller],
    providers: [BankingGatewayService]
})
export class V1Module {}
