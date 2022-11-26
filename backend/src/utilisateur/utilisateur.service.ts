import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from 'src/entities/Utilisateur';
import { Repository } from 'typeorm';
import { CreateUtilisateurDto } from './dto/utilisateur.dto';

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
}


