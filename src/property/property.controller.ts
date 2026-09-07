import {Body, Controller, Get, Param, Patch, Post, UsePipes} from '@nestjs/common';
import {ZodValidationPipe} from "./pipes/zod-validation.pipe.js";
import * as updatePropertySchema from "./schemas/updatePropertySchema.js";
import * as createPropertySchema from "./schemas/createPropertySchema.js";
import {UpdatePropertySchema, UpdatePropertyType} from "./schemas/updatePropertySchema.js";

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
    @UsePipes(new ZodValidationPipe(createPropertySchema.CreatePropertySchema))
    create(@Body() createPropertyType: createPropertySchema.CreatePropertyType) {
        return createPropertyType;
    }

    //region update
    @Patch(':id')
    update(
        @Param("id") id: string,
        @Body(new ZodValidationPipe(updatePropertySchema.UpdatePropertySchema)) updateDto: updatePropertySchema.UpdatePropertyType) {
        return updateDto;
    }

    //endregion

}
