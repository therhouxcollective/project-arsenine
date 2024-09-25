import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthService } from './services/auth.service';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './controller/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { LoginEntity } from './entities/login.entity';
import { MessengerModule } from 'src/messenger/messenger.module';

@Module({
  providers: [AuthService],
  imports: [
    ConfigModule,
    MessengerModule,
    TypeOrmModule.forFeature([UserEntity, LoginEntity]),

  ],
  controllers: [AuthController],
})
export class IdentityModule { }
