import { Body, Controller, ForbiddenException, Get, NotAcceptableException, 
    Param, Patch, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUtilisateurDto, ParamUtilisateurDto, UpdateUtilisateurDto, 
    UpdateUtilisateurPasswordDto } from './dto/utilisateur.dto';
import { UtilisateurService } from './utilisateur.service';
import { diskStorage } from 'multer';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { Utilisateur } from 'src/entities/Utilisateur';

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
        if(req.user.fonction !== 'utilisateur') throw new ForbiddenException('Credentials incorrects !');
        const donnees = {utilisateur_id: +(req.user.id)};
        return await this.utilisateurService.find(donnees);
    }

    @UseGuards(AuthGuard('jwtFakoy'))
    @Patch('update')
    async updateUtilisateur(@Body() donnees: UpdateUtilisateurDto, @Request() req: any) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.utilisateurService.update(donnees, +(req.user.id));
    }

    @UseGuards(AuthGuard('jwtFakoy'))
    @Patch('update-password')
    async updatePasswordUtilisateur(@Body() donnees: UpdateUtilisateurPasswordDto, @Request() req: any) {
        if(!donnees) throw new NotAcceptableException('Credentials incorrects !');
        return await this.utilisateurService.updatePassword(donnees, +(req.user.id));
    }

    @UseGuards(AuthGuard('jwtFakoy'))
    @Patch('update-photo')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads/photo_utilisateur/',
            filename: (req, file, cb): void => {
                const name: string = file.originalname.split('.')[0];
                const tmp: Array<string> = file.originalname.split('.');
                const fileExtension: string = tmp[tmp.length - 1];
                const newFilename: string = name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension;
                cb(null, newFilename);
            }
        }),
        fileFilter: (req, file, cb) => {
            if(file.size > 1000) return cb(null, false);
            if(!file.originalname.match(/\.(png|jpg|jpeg|svg)$/)) 
                return cb(null, false);
            cb(null, true);
        }
    }))
    async updatePhotoUtilisateur(@UploadedFile() file: Express.Multer.File, @Request() req: any) {
        if(req.user.fonction !== 'utilisateur') throw new ForbiddenException('Credentials incorrects !');
        const lastPhoto: Utilisateur = await this.utilisateurService.verifyPhoto(+(req.user.id));
        if(lastPhoto.pathPhoto) {
            const fs = require('fs');
            fs.unlink('./uploads'+lastPhoto.pathPhoto, (err: any, data: any) => {
                if(err) throw new Error('Erreur de supression du fichier !');
            });
        }
        const pathfile: string = `/etudiants_profils/${ file.filename }`;
        return await this.utilisateurService.updatePathPhoto(pathfile, +(req.user.id))
    }
}
