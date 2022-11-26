import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from 'src/entities/Utilisateur';
import { Repository } from 'typeorm';
import { AuthDto, AuthUtilisateurResponseDto,
    AuthUtilisateurResponseTokenDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Utilisateur)
        private utilisateurRepository: Repository<Utilisateur>,
        private jwtService: JwtService
    ) {}

    private async signToken(donnees: AuthUtilisateurResponseDto): Promise<string> {
        return await this.jwtService.signAsync({
            id: donnees.id,
            username: donnees.username,
            fonction: donnees.fonction
        });
    }

    async signinUtilisateur(donnees: AuthDto): Promise<AuthUtilisateurResponseTokenDto> {
        const response: Utilisateur = await this.utilisateurRepository
        .createQueryBuilder('u')
        .select([
            'u.id as id', 'u.username as username', 
            'u.fonction as fonction'
        ])
        .where(`u.username=:username AND u.password=SHA2(:password, 256)`, {
            username: donnees.username,
            password: donnees.password
        })
        .getRawOne();
        
        if(!response) throw new UnauthorizedException('Credentials incorrects !');

        return {
            access_token: await this.signToken(response)
        };
    }
}
