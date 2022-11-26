import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/entities/Admin';
import { Contenu } from 'src/entities/Contenu';
import { Repository } from 'typeorm';
import { CreateContenuDto, ParamContenuIdDto, UpdateContenuDto } from './dto/contenu.dto';

@Injectable()
export class ContenuService {
    constructor(
        @InjectRepository(Contenu)
        private contenuRepository: Repository<Contenu>
    ) {}

    async create(donnees: CreateContenuDto, admin_id: number): Promise<void> {
        await this.contenuRepository
        .createQueryBuilder()
        .insert()
        .into(Contenu)
        .values({
            description: donnees.description,
            adminId: admin_id,
            typeId: donnees.type_id
        })
        .execute();
    }

    async findall(): Promise<Contenu[]> {
        return await this.contenuRepository
        .createQueryBuilder('c')
        .select([
            'c.id as id', 'c.photo_1 as photo_1',
            'c.photo_2 as photo_2', 'c.description as description',
            'c.admin_id as admin_id', 'a.username as username_admin',
            'c.created_at as created_at', 'c.updated_at as updated_at'
        ])
        .innerJoin(Admin, 'a', 'c.admin_id = a.id')
        .getRawMany();
    }

    async find(donnees: ParamContenuIdDto): Promise<Contenu> {
        return await this.contenuRepository
        .createQueryBuilder('c')
        .select([
            'c.id as id', 'c.photo_1 as photo_1',
            'c.photo_2 as photo_2', 'c.description as description',
            'c.admin_id as admin_id', 'a.username as username_admin',
            'c.created_at as created_at', 'c.updated_at as updated_at'
        ])
        .innerJoin(Admin, 'a', 'c.admin_id = a.id')
        .where(`c.id=:identifiant`, {identifiant: donnees.contenu_id})
        .getRawOne();
    }
}
