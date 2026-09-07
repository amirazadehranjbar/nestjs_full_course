import {CreatePropertySchema} from "./createPropertySchema.js";

export const UpdatePropertySchema = CreatePropertySchema.partial();

export type UpdatePropertySchema = CreatePropertySchema;