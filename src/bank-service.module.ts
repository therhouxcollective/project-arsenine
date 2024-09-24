import { Module } from '@nestjs/common';
import { V1Module } from './v1/v1.module';
import { IdentityModule } from './identity/identity.module';
import { MessengerModule } from './messenger/messenger.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BankingModule } from './banking/banking.module';
import * as path from 'path';

@Module({
  imports: [IdentityModule, MessengerModule, BankingModule, ConfigModule.forRoot({
    envFilePath: path.resolve(__dirname, '.env'),
    isGlobal: true
  }), TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DATABASE_HOST'),
      port: configService.get('DATABASE_PORT'),
      username: configService.get('DATABASE_USERNAME'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_NAME'),
      autoLoadEntities: true,
      logging: true,
      synchronize: true,
    }),
  })
  ],
})
export class BankServiceModule { }
