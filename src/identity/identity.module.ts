import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FusionAuthService } from './services/fusion-auth/fusion-auth.service';

@Module({
  providers: [FusionAuthService],
  imports: [
    ClientsModule.register([
      {
        name: 'auth_service',
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],
  controllers: [],
})
export class IdentityModule {}
