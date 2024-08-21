import { Inject, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service'
import { Cache } from '@nestjs/cache-manager'
import { RedisCacheRepository } from 'src/redis-repository';

@Injectable()
export class MercadoService {
  constructor(
    private readonly prisma: PrismaService, 
    private readonly redisCacheRepository: RedisCacheRepository,
  ) {}

  async findAll() {
    const cachedData = await this.redisCacheRepository.getData('produtos');

    if (cachedData) {
      return cachedData;
    }
    return await this.prisma.mercado.findMany();
  }
}
