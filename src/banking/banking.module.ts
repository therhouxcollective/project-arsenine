import { Module } from '@nestjs/common';
import { BankingService } from './services/banking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankingController } from './controllers/banking.controller';
import { StatementEntity } from './entities/statement.entity';
import { MessengerModule } from 'src/messenger/messenger.module';

@Module({
  imports: [
    MessengerModule,
    TypeOrmModule.forFeature([StatementEntity]),
    MessengerModule
  ],
  providers: [BankingService],
  controllers: [BankingController]
})
export class BankingModule { }
