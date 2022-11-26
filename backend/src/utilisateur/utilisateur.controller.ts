import { Body, Controller, Get, NotAcceptableException, 
    Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUtilisateurDto, ParamUtilisateurDto } from './dto/utilisateur.dto';
import { UtilisateurService } from './utilisateur.service';

@Controller('utilisateur')
export class UtilisateurController {
    constructor(
        private readonly utilisateurService: UtilisateurService
    ) {}

    @Post('create')
    async createUtilisateur(@Body() donnees: CreateUtilisateurDto) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.utilisateurService.create(donnees);
    }

    @Get('all')
    async findallUtilisateur() {
        return await this.utilisateurService.findall();
    }

    @Get(':utilisateur_id')
    async findUtilisateurById(@Param() donnees: ParamUtilisateurDto) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.utilisateurService.find(donnees);
    }

    @UseGuards(AuthGuard('jwtFakoy'))
    @Get('')
    async findUtilisateur(@Request() req: any) {
        const donnees = {utilisateur_id: +(req.user.id)};
        return await this.utilisateurService.find(donnees);
    }
}
