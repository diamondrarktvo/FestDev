import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from 'src/entities/Utilisateur';
import { Repository } from 'typeorm';
import { CreateUtilisateurDto, ParamUtilisateurDto } from './dto/utilisateur.dto';

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
            mdp: donnees.password
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
            'u.created_at as created_at', 'u.updated_at as updated_at'
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
            'u.created_at as created_at', 'u.updated_at as updated_at'
        ])
        .where(`u.id=:identifiant`, {identifiant: donnees.utilisateur_id})
        .getRawOne();
    }
}


