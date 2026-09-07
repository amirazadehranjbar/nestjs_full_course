import {CreatePropertySchema} from "./createPropertySchema.js";
import z from "zod";

export const UpdatePropertySchema = CreatePropertySchema.partial();

export type UpdatePropertyType = z.infer<typeof UpdatePropertySchema>;