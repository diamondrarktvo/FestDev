import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Type } from 'src/entities/Type';
import { Repository } from 'typeorm';

@Injectable()
export class TypeService {
    constructor(
        @InjectRepository(Type)
        private typeRepository: Repository<Type>
    ) {}

    async findall(): Promise<Type[]> {
        return await this.typeRepository
        .createQueryBuilder('t')
        .select([
            't.nom as nom', 't.description as decription'
        ])
        .getRawMany();
    }
}
