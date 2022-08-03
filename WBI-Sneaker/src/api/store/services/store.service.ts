import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Store } from '../entities/store.entity';

@Injectable()
export class StoresService {
  constructor(@InjectRepository(Store) private storeRepo: Repository<Store>) {}

  findAll() {
    return this.storeRepo.find({ relations: ['products'] });
  }
}
