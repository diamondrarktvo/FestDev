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

    async signinUtilisateur(donnees: AuthDto): Promise<AuthResponseTokenDto> {
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

    async signinAdmin(donnees: AuthDto): Promise<AuthResponseTokenDto> {
        const response: Admin = await this.adminRepository
        .createQueryBuilder('a')
        .select([
            'a.id as id', 'a.username as username', 
            'a.fonction as fonction'
        ])
        .where(`a.username=:username AND a.password=SHA2(:password, 256)`, {
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
