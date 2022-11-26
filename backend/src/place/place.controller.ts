import { Body, Controller, Get, NotAcceptableException, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePlaceDto } from './dto/place.dto';
import { PlaceService } from './place.service';

@Controller('place')
export class PlaceController {
    constructor(
        private placeService: PlaceService
    ) {}

    @UseGuards(AuthGuard('jwtFakoy'))
    @Post('create')
    async createPlace(@Body() donnees: CreatePlaceDto) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.createPlace(donnees);
    }

    @Get('all')
    async findallPlace() {
        return await this.placeService.findall();
    }
}
