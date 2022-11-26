import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/entities/Admin';
import { Utilisateur } from 'src/entities/Utilisateur';
import { Repository } from 'typeorm';
import { AuthDto, AuthResponseDto,
    AuthResponseTokenDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Utilisateur)
        private utilisateurRepository: Repository<Utilisateur>,

        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>,

        private jwtService: JwtService
    ) {}

    private async signToken(donnees: AuthResponseDto): Promise<string> {
        return await this.jwtService.signAsync({
            id: donnees.id,
            username: donnees.username,
            fonction: donnees.fonction
        });
    }

    async signinUtilisateur(donnees: AuthDto) {
        const response: Utilisateur = await this.utilisateurRepository
        .createQueryBuilder('u')
        .select([
            'u.id as id', 'u.nom as nom', 'u.prenom as prenom',
            'u.quartier as quartier', 'u.cin as cin', 'u.username as username',
            'u.phone as phone', 'u.path_photo as path_photo', 
            'u.created_at as created_at', 'u.update_at as updated_at',
            'u.fonction as fonction'
        ])
        .where(`u.username=:username AND u.mdp=SHA2(:password, 256)`, {
            username: donnees.username,
            password: donnees.password
        })
        .getRawOne();
        if(!response) throw new UnauthorizedException('Credentials incorrects !');

        return {
            statusCode: 200,
            access_token: await this.signToken(response),
            ...response
        };
    }

    async signinAdmin(donnees: AuthDto) {
        const response: Admin = await this.adminRepository
        .createQueryBuilder('a')
        .select([
            'a.id as id', 'a.nom as nom', 'a.prenom as prenom', 
            'a.username as username', 'a.phone as phone', 
            'a.path_photo as path_photo', 
            'a.fonction as fonction'
        ])
        .where(`a.username=:username AND a.mdp=SHA2(:password, 256)`, {
            username: donnees.username,
            password: donnees.password
        })
        .getRawOne();
        if(!response) throw new UnauthorizedException('Credentials incorrects !');

        return {
            statusCode: 200,
            access_token: await this.signToken(response),
            ...response
        };
    }
}
