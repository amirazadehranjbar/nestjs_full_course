import {Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import * as createPropertySchema from "./schemas/createPropertySchema.js";
import {ZodValidationPipe} from "./pipes/zod-validation.pipe.js";
import {UpdatePropertySchema} from "./schemas/updatePropertySchema.js";
import {CreatePropertySchema} from "./schemas/createPropertySchema.js";

@Controller('property')
export class PropertyController {

    @Get()
    findAll() {
        return "all property";
    }

    @Get(':id')
    findOne(@Param("id") id: string) {
        return typeof id;
    }

    @Post()
    @UsePipes(new ZodValidationPipe(CreatePropertySchema))
    create(@Body() createPropertyType: CreatePropertySchema){
        return createPropertyType;
    }

    @Patch(':id')
    update(@Param("id") id:string , @Body() updatePropertyShema: UpdatePropertySchema){
        return updatePropertyShema;
    }

}
