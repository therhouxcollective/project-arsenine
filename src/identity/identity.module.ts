import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthService } from './services/auth.service';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './controller/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { LoginEntity } from './entities/login.entity';

@Module({
  providers: [AuthService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([UserEntity, LoginEntity]),
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
  controllers: [AuthController],
})
export class IdentityModule {}
