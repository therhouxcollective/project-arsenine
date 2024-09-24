import { Module } from '@nestjs/common';
import { BankingService } from './services/banking.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankingController } from './banking/banking.controller';
import { StatementEntity } from './entities/statement.entity';
import { MessengerModule } from 'src/messenger/messenger.module';

@Module({
  imports: [
    MessengerModule,
    TypeOrmModule.forFeature([StatementEntity]),
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
  providers: [BankingService],
  controllers: [BankingController]
})
export class BankingModule {}
