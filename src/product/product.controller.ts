import {
  Body,
  Controller,
  Post,
  UsePipes,
} from '@nestjs/common';
import * as productSchema from './schemas/createProductSchema.js';
import { ProductPipes } from './productPipes.js';
import { ProductService } from './product.service.js';

@Controller('product')
export class ProductController {

  constructor(private readonly schema : ProductService) {
  }


  @Post()
  @UsePipes(new ProductPipes(productSchema.CreateProductSchema))

  create(@Body()
         product: productSchema.CreateProductDto):
         productSchema.CreateProductDto {
    return this.schema.create(product);
  }


}
