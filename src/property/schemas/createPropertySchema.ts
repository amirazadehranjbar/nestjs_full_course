import {z} from "zod";


export const CreatePropertySchema = z.object({
    name: z.string(),
    description: z.string().min(5),
    area: z.number({message:"area must positive number"}).positive(),
});

export type CreatePropertyType  = z.infer<typeof CreatePropertySchema>;