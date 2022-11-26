import { Body, Controller, NotAcceptableException, Post } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/utilisateur.dto';
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
}
