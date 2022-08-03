import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Store } from '../store/entities/store.entity';

@Module({
  controllers: [ProductController],
  exports: [ProductService, TypeOrmModule],
  imports: [TypeOrmModule.forFeature([Product, Store])],
  providers: [ProductService],
})
export class ProductModule {}
