import { Body, Controller, ForbiddenException, Get, NotAcceptableException, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateFakoDto, ParamFakoStatusDto, ParamFakoTypeId, ParamFakoUtilisateurIdDto, UpdateFakoStatusDto } from './dto/fako.dto';
import { FakoService } from './fako.service';

@Controller('fako')
export class FakoController {
    constructor(
        private readonly fakoService: FakoService
    ) {}

    @UseGuards(AuthGuard('jwtFakoy'))
    @Post('create')
    async createFako(@Body() donnees: CreateFakoDto, @Request() req: any) {
        if(req.user.fonction !== 'admin') throw new ForbiddenException('Credentials incorrects !');
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.fakoService.create(donnees);
    }
    
    @Get('all')
    async findallFako() {
        return await this.fakoService.findall();
    }

    @Get('utilisateur/:utilisateur_id')
    async findFakoByUtilisateurId(@Param() donnees: ParamFakoUtilisateurIdDto) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.fakoService.findByUtilisateurId(donnees);
    }

    @Get('status/:status')
    async findFakoByStatus(@Param() donnees: ParamFakoStatusDto) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.fakoService.findByStatus(donnees);
    }

    @Get('type/:type_id')
    async findFakoByTypeId(@Param() donnees: ParamFakoTypeId) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.fakoService.findByTypeId(donnees);
    }

    @UseGuards(AuthGuard('jwtFakoy'))
    @Patch('update-status')
    async updateFakoStatus(@Body() donnees: UpdateFakoStatusDto, @Request() req: any) {
        if(req.user.fonction !== 'admin') throw new ForbiddenException('Credentials incorrects !');
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.fakoService.updateStatus(donnees);
    }
}
