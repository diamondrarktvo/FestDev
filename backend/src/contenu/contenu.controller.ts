import { Body, Controller, ForbiddenException, Get, 
    NotAcceptableException, Param, Post, Request, 
    UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { ContenuService } from './contenu.service';
import { CreateContenuDto, ParamContenuIdDto } from './dto/contenu.dto';
import { diskStorage } from 'multer';
import { Express } from 'express';

@Controller('contenu')
export class ContenuController {
    constructor(
        private readonly contenuService: ContenuService
    ) {}

    @UseGuards(AuthGuard('jwtFakoy'))
    @Post('create')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads/photo_contenu/',
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
    async createContenu(@UploadedFile() file: Express.Multer.File, @Body() donnees: CreateContenuDto, @Request() req: any) {
        if(req.user.fonction !== 'admin') throw new ForbiddenException('Credentials incorrects !');
        if(!donnees) throw new NotAcceptableException('Credentials incorrects');
        const filename = `/photo_contenu/${ file.filename }`;
        return await this.contenuService.create(donnees, filename, +(req.user.id));
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
