import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { MercadoService } from './adm-mercado.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller()
export class MercadoController {
  constructor(private readonly mercadoService: MercadoService) { }

  @Get('/produtos')
  async findAll() {
    return this.mercadoService.findAll();
  }
}
