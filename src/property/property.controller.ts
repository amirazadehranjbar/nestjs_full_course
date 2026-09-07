import {Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import * as createPropertySchema from "./schemas/createPropertySchema.js";

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
    @UsePipes(new ValidationPipe())
    create(@Body() createPropertyType: createPropertySchema.CreatePropertyType){
        return createPropertyType;
    }

    @Patch(':id')
    update(@Param("id") id:string , @Body() createPropertyType: createPropertySchema.CreatePropertyType){
        return createPropertyType;
    }

}
