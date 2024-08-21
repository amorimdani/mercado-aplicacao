import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { MercadoController } from './adm-mercado.controller';
import { MercadoService } from './adm-mercado.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [CacheModule.register({ isGlobal: true})],
  controllers: [MercadoController],
  providers: [MercadoService, PrismaService],
})
export class MercadoModule {}
