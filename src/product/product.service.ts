import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './schemas/createProductSchema.js';

@Injectable()
export class ProductService {

  //region create new product
  create(product: CreateProductDto) {
    try {
      return product;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
  //endregion
}
