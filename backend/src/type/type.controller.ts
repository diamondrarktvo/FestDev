import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { TypeService } from './type.service';

@ApiBearerAuth()
@Controller('type')
export class TypeController {
    constructor(
        private readonly typeService: TypeService
    ) {}

    @Get('all')
    async findallType() {
        return await this.typeService.findall();
    }
}
