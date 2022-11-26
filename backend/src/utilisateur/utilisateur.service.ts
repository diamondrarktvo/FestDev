import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fako } from 'src/entities/Fako';
import { Utilisateur } from 'src/entities/Utilisateur';
import { Repository } from 'typeorm';
import { CreateUtilisateurDto, ParamUtilisateurDto, 
    UpdateUtilisateurDto, UpdateUtilisateurPasswordDto } from './dto/utilisateur.dto';

@Injectable()
export class UtilisateurService {
    constructor(
        @InjectRepository(Utilisateur)
        private utilisateurRepository: Repository<Utilisateur>,
    ) { }

    private async encrypt(text: string) {
        const crypto = require('crypto');
        const algorithm = 'aes-256-cbc';
        const key = crypto.randomBytes(32);
        const iv = crypto.randomBytes(16);

        let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return JSON.stringify({ 
            iv: iv.toString('hex'),
            key: key.toString('hex'),
            encryptedData: encrypted.toString('hex') 
        });
    }

    private async generateQrCode(qrname: string, data: string) {
        const qrcode = require('qrcode');
        await qrcode.toFile(qrname, data);
    }

    async updatePathQrCode(pathfile: string, utilisateur_id: number) {
        await this.utilisateurRepository
        .createQueryBuilder()
        .update(Utilisateur)
        .set({
            pathQrCode: pathfile
        })
        .where(`id=:identifiant`, {identifiant: utilisateur_id})
        .execute();
    }

    async create(donnees: CreateUtilisateurDto): Promise<void> {
        const response = await this.utilisateurRepository
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
        const identifiers = await response['identifiers'][0].id;
        const cryptData = await this.encrypt(identifiers.toString());
        const filename = `qr_code/${Date.now()}.png`;
        await this.generateQrCode(`uploads/${filename}`, cryptData);
        await this.updatePathQrCode(filename, identifiers);
        // const decryptData = await this.decrypt(JSON.parse(cryptData));
        // console.log(decryptData);
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

    // async findArgents(utilisateur_id: number) {
    //     return await this.utilisateurRepository
    //     .createQueryBuilder('u')
    //     .select([
    //         'u.id as id', 'u.username as username',
    //         `(SELECT SUM(prix) FROM fako 
    //         WHERE id_Utilisateur = f.id_Utilisateur) as somme_argents`
    //     ])
    //     .innerJoin(Fako, 'f', 'f.id_Utilisateur = u.id')
    //     .where(`f.id_Utilisateur=:identifiant AND f.status=:status`, {
    //         identifiant: utilisateur_id,
    //         status: false
    //     })
    //     .groupBy('f.id_Utilisateur')
    //     .getRawOne();
    // }

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
