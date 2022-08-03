import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getHello(): string {
    return this.productService.getHello();
  }
  @Get('product')
  getProduct() {
    return this.productService.findAll();
  }
}
