import { Body, Controller, ForbiddenException, Get, NotAcceptableException, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ContenuService } from './contenu.service';
import { CreateContenuDto, ParamContenuIdDto } from './dto/contenu.dto';

@Controller('contenu')
export class ContenuController {
    constructor(
        private readonly contenuService: ContenuService
    ) {}

    @UseGuards(AuthGuard('jwtFakoy'))
    @Post('create')
    async createContenu(@Body() donnees: CreateContenuDto, @Request() req: any) {
        if(req.user.fonction === 'admin') throw new ForbiddenException('Credentials incorrects !');
        if(!donnees) throw new NotAcceptableException('Credentials incorrects');
        return await this.contenuService.create(donnees, +(req.user.id));
    }

    @Get('all')
    async findallContenu() {
        return await this.contenuService.findall();
    }

    @Get(':contenu_id')
    async findContenu(@Param() donnees: ParamContenuIdDto) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.contenuService.find(donnees);
    }
}
