import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fako } from 'src/entities/Fako';
import { Place } from 'src/entities/Place';
import { Type } from 'src/entities/Type';
import { Utilisateur } from 'src/entities/Utilisateur';
import { Repository } from 'typeorm';
import { CreateFakoDto, ParamFakoStatusDto, ParamFakoTypeId, ParamFakoUtilisateurIdDto, UpdateFakoStatusDto } from './dto/fako.dto';

@Injectable()
export class FakoService {
    constructor(
        @InjectRepository(Fako)
        private fakoRepository: Repository<Fako>
    ) {}

    private async decrypt(text: {iv: string, key: string, encryptedData: string}) {
        const crypto = require('crypto');
        const algorithm = 'aes-256-cbc';

        let iv = Buffer.from(text.iv, 'hex');
        let key = Buffer.from(text.key, 'hex');
        let encryptedText = Buffer.from(text.encryptedData, 'hex');
        let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
   }

    async create(donnees: CreateFakoDto): Promise<void> {
        const decryptUtilisateurId = await this.decrypt(JSON.parse(donnees.utilisateur_id));
        await this.fakoRepository
        .createQueryBuilder()
        .insert()
        .into(Fako)
        .values({
            poids: donnees.poids,
            prix: +(donnees.poids) * 0.7,
            idUtilisateur: decryptUtilisateurId,
            idType: donnees.type_id,
            idPlace: donnees.place_id
        })
        .execute();
    }

    async findall(): Promise<Fako[]> {
        return await this.fakoRepository
        .createQueryBuilder('f')
        .select([
            'f.id as id', 'f.poids as poids', 'f.status as status',
            'f.prix as prix', 'f.date_create as created_at', 
            'u.username as username', 't.nom as type_fako', 
            't.description as description',
            'p.nom as nom_place', 'p.cord_x as cord_x',
            'p.id_Fokotany as fokontany_id'
        ])
        .innerJoin(Utilisateur, 'u', 'f.id_Utilisateur = u.id')
        .innerJoin(Type, 't', 'f.id_Type = t.id')
        .innerJoin(Place, 'p', 'f.id_Place = p.id')
        .getRawMany();
    }

    async findByUtilisateurId(donnees: ParamFakoUtilisateurIdDto): Promise<Fako[]> {
        return await this.fakoRepository
        .createQueryBuilder('f')
        .select([
            'f.id as id', 'f.poids as poids', 'f.status as status',
            'f.prix as prix', 'f.date_create as created_at', 
            'u.username as username', 't.nom as type_fako', 
            't.description as description',
            'p.nom as nom_place', 'p.cord_x as cord_x',
            'p.id_Fokotany as fokontany_id'
        ])
        .innerJoin(Utilisateur, 'u', 'f.id_Utilisateur = u.id')
        .innerJoin(Type, 't', 'f.id_Type = t.id')
        .innerJoin(Place, 'p', 'f.id_Place = p.id')
        .where(`f.id_Utilisateur=:identifiant`, {identifiant: donnees.utilisateur_id})
        .getRawMany();
    }

    async findByStatus(donnees: ParamFakoStatusDto): Promise<Fako[]> {
        return await this.fakoRepository
        .createQueryBuilder('f')
        .select([
            'f.id as id', 'f.poids as poids', 'f.status as status',
            'f.prix as prix', 'f.date_create as created_at', 
            'u.username as username', 't.nom as type_fako', 
            't.description as description',
            'p.nom as nom_place', 'p.cord_x as cord_x',
            'p.id_Fokotany as fokontany_id'
        ])
        .innerJoin(Utilisateur, 'u', 'f.id_Utilisateur = u.id')
        .innerJoin(Type, 't', 'f.id_Type = t.id')
        .innerJoin(Place, 'p', 'f.id_Place = p.id')
        .where(`f.status=:identifiant`, {identifiant: donnees.status})
        .getRawMany();
    }

    async findByTypeId(donnees: ParamFakoTypeId): Promise<Fako[]> {
        return await this.fakoRepository
        .createQueryBuilder('f')
        .select([
            'f.id as id', 'f.poids as poids', 'f.status as status',
            'f.prix as prix', 'f.date_create as created_at', 
            'u.username as username', 't.nom as type_fako', 
            't.description as description',
            'p.nom as nom_place', 'p.cord_x as cord_x',
            'p.id_Fokotany as fokontany_id'
        ])
        .innerJoin(Utilisateur, 'u', 'f.id_Utilisateur = u.id')
        .innerJoin(Type, 't', 'f.id_Type = t.id')
        .innerJoin(Place, 'p', 'f.id_Place = p.id')
        .where(`f.status=:identifiant`, {identifiant: donnees.type_id})
        .getRawMany();
    }

    async findArgents(utilisateur_id: number) {
        return await this.fakoRepository
        .createQueryBuilder('f')
        .select([
            'SUM(f.prix) as somme_argent'
        ])
        .where(`f.id_Utilisateur=:identifiant AND f.status=:status`, {
            identifiant: utilisateur_id,
            status: false
        })
        .getRawOne();
    }

    async updateStatus(donnees: UpdateFakoStatusDto): Promise<void> {
        await this.fakoRepository
        .createQueryBuilder()
        .update(Fako)
        .set({
            status: true
        })
        .where(`id=:identifiant`, {identifiant: donnees.fako_id})
        .execute();
    }
}
