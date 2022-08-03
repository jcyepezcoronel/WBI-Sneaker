import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  @Get()
  findAll() {
    return this.productRepo.find({ relations: ['store'] });
  }
}
