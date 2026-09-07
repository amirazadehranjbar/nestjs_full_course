import {PipeTransform, ArgumentMetadata, BadRequestException} from '@nestjs/common';
import {z, ZodType} from 'zod';

export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: ZodType) {
    }

    transform(value: unknown, metadata: ArgumentMetadata) {


        const result = this.schema.safeParse(value);

        if (!result.success) throw new BadRequestException(z.treeifyError(result.error));
        
        return result.data;   // this is what @Body() actually receives


    }
}
