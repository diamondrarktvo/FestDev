import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PlaceService } from './place.service';

@Controller('place')
export class PlaceController {
    constructor(
        private placeService: PlaceService
    ) {}

    @UseGuards(AuthGuard('jwtFakoy'))
    @Post('create')
    async createPlace() {
        return await this.createPlace();
    }

    @Get('all')
    async findallPlace() {
        return await this.placeService.findall();
    }
}
