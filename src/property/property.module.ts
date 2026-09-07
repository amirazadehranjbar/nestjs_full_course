import {Module, ValidationPipe} from '@nestjs/common';
import {PropertyController} from './property.controller.js';
import {PropertyService} from './property.service.js';
import {APP_PIPE} from "@nestjs/core";

@Module({
    controllers: [PropertyController],
    providers: [PropertyService, {
        provide: APP_PIPE,
        useValue: new ValidationPipe({forbidNonWhitelisted: true, whitelist: true})
    }]
})
export class PropertyModule {
}
