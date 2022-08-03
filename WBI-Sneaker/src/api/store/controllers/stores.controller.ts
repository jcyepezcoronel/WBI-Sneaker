import { Controller, Get, Param, Request } from '@nestjs/common';
import { StoresService } from '../services/store.service';

@Controller('store')
export class StoreController {
  constructor(private storesService: StoresService) {}

  @Get()
  async findAll(@Request() req: any) {
    return this.storesService.findAll();
  }
}
