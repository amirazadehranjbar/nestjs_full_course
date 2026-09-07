import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodType } from 'zod';

export class ZodValidationPipe implements PipeTransform {
    constructor(private schema: ZodType) {}

    transform(value: unknown, metadata: ArgumentMetadata) {
        try {
            // safeParse or parse converts data and throws descriptive errors if invalid
            return this.schema.parse(value);
        } catch (error) {
            throw new BadRequestException({
                message: 'Validation failed',
                //errors: error.errors, // Provides specific path and validation errors
            });
        }
    }
}
