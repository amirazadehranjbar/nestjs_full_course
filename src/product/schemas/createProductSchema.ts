import { z } from 'zod';

export const CreateProductSchema = z.object({

  name : z.string(),
  price : z.number()

}).required();

export type CreateProductDto = z.infer<typeof CreateProductSchema>

