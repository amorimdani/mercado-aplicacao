import { NestFactory } from '@nestjs/core';
import { MercadoModule } from './adm-mercado/adm-mercado.module';

async function bootstrap() {
  const app = await NestFactory.create(MercadoModule);
  await app.listen(3000);

  console.log('Aplicação rodando')
}
bootstrap();
