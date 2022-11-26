import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/entities/Admin';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Admin)
        private adminRepository: Repository<Admin>
    ) {}

    async find(admin_id: number) {
        await this.adminRepository
        .createQueryBuilder('a')
        .select([
            'a.id as id', 'a.nom as nom', 'a.prenom as prenom', 
            'a.username as username', 'a.phone as phone', 
            'a.path_photo as path_photo'
        ])
        .where(`a.id=:identifiant`, {identifiant: admin_id})
        .getRawOne();
    }
}
