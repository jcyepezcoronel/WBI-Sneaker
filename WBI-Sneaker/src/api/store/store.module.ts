import { Module } from '@nestjs/common';
import { StoreController } from './controllers/stores.controller';
import { StoresService } from './services/store.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './entities/store.entity';
import { ProductModule } from '../product/product.module';
import { Product } from '../product/entities/product.entity';

@Module({
  controllers: [StoreController],
  exports: [StoresService, TypeOrmModule],
  imports: [ProductModule, TypeOrmModule.forFeature([Store, Product])],
  providers: [StoresService],
})
export class StoreModule {}
