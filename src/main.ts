import { NestFactory } from '@nestjs/core';
import { BankServiceModule } from './bank-service.module';
import { Transport } from '@nestjs/microservices';
import { V1Module } from './v1/v1.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(BankServiceModule, {
    transport: Transport.NATS,
    options: {
      url: 'nats://localhost:4222',
    },
  });

  await app.listen();

  const gateway = await NestFactory.create(V1Module);

  const options = new DocumentBuilder()
    .setTitle('Arsenic Banking App')
    .setDescription('Swagger documentation for the Arsenic Banking App')
    .setVersion('1.0').build();
  //app.setGlobalPrefix('v1');

  const document = SwaggerModule.createDocument(gateway, options);

  SwaggerModule.setup('api', gateway, document);

   gateway.listen(3000);
}
bootstrap();
