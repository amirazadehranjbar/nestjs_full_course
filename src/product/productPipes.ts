import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { z, ZodType } from 'zod';

export class ProductPipes implements PipeTransform {
  constructor(private readonly type: ZodType) {}

  transform(value: any, metadata: ArgumentMetadata): any {

      const parsedValue = this.type.safeParse(value);
      if(parsedValue.success) return parsedValue.data;

    if(parsedValue.error) throw new BadRequestException(z.treeifyError(parsedValue.error));



  }
}
