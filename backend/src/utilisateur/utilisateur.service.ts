import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from 'src/entities/Utilisateur';
import { Repository } from 'typeorm';
import { CreateUtilisateurDto, ParamUtilisateurDto, 
    UpdateUtilisateurDto, UpdateUtilisateurPasswordDto } from './dto/utilisateur.dto';

@Injectable()
export class UtilisateurService {
    constructor(
        @InjectRepository(Utilisateur)
        private utilisateurRepository: Repository<Utilisateur>
    ) {}

    async create(donnees: CreateUtilisateurDto): Promise<void> {
        await this.utilisateurRepository
        .createQueryBuilder()
        .insert()
        .into(Utilisateur)
        .values({
            nom: donnees.nom,
            prenom: donnees.prenom,
            quartier: donnees.quartier,
            cin: donnees.cin,
            username: donnees.username,
            phone: donnees.phone,
            mdp: () => "SHA2('"+donnees.password+"', 256)"
        })
        .execute();
    }

    async findall(): Promise<Utilisateur[]> {
        return await this.utilisateurRepository
        .createQueryBuilder('u')
        .select([
            'u.id as id', 'u.nom as nom', 'u.prenom as prenom',
            'u.quartier as quartier', 'u.cin as cin', 'u.username as username',
            'u.phone as phone', 'u.path_photo as path_photo', 
            'u.created_at as created_at', 'u.update_at as updated_at'
        ])
        .getRawMany()
    }

    async find(donnees: ParamUtilisateurDto): Promise<Utilisateur> {
        return await this.utilisateurRepository
        .createQueryBuilder('u')
        .select([
            'u.id as id', 'u.nom as nom', 'u.prenom as prenom',
            'u.quartier as quartier', 'u.cin as cin', 'u.username as username',
            'u.phone as phone', 'u.path_photo as path_photo', 
            'u.created_at as created_at', 'u.update_at as updated_at'
        ])
        .where(`u.id=:identifiant`, {identifiant: donnees.utilisateur_id})
        .getRawOne();
    }

    async update(donnees: UpdateUtilisateurDto, utilisateur_id: number): Promise<void> {
        await this.utilisateurRepository
        .createQueryBuilder()
        .update(Utilisateur)
        .set({
            quartier: donnees.quartier,
            phone: donnees.phone,
            username: donnees.username,
            updateAt: () => "NOW()"
        })
        .where(`id=:identifiant`, {identifiant: utilisateur_id})
        .execute();
    }

    async updatePassword(donnees: UpdateUtilisateurPasswordDto, utilisateur_id: number): Promise<void> {
        const response: Utilisateur = await this.utilisateurRepository
        .createQueryBuilder('u')
        .select(['u.id'])
        .where(`u.id=:identifiant AND u.mdp=SHA2(:password, 256)`, {
            identifiant: utilisateur_id,
            password: donnees.lastPassword
        })
        .getRawOne();

        if(!response) throw new ForbiddenException('Credentials incorrects !');
        await this.utilisateurRepository
        .createQueryBuilder()
        .update(Utilisateur)
        .set({
            mdp: () => "SHA2('"+donnees.newPassword+"', 256)",
            updateAt: () => "NOW()"
        })
        .where(`id=:identifiant`, {identifiant: utilisateur_id})
        .execute();
    }

    async verifyPhoto(utilisateur_id: number): Promise<Utilisateur> {
        return await this.utilisateurRepository
        .createQueryBuilder('u')
        .select(['u.path_photo as pathPhoto'])
        .where(`u.id=:identifiant`, {identifiant: utilisateur_id})
        .getRawOne();
    }

    async updatePathPhoto(path_photo: string, utilisateur_id: number): Promise<void> {
        await this.utilisateurRepository
        .createQueryBuilder()
        .update(Utilisateur)
        .set({
            pathPhoto: path_photo,
            updateAt: () => "NOW()"
        })
        .where(`id=:identifiant`, {identifiant: utilisateur_id})
        .execute();
    }
}
