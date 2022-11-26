import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from 'src/entities/Place';
import { Repository } from 'typeorm';

@Injectable()
export class PlaceService {
    constructor(
        @InjectRepository(Place)
        private placeRepository: Repository<Place>
    ) {}

    async create():  Promise<void> {

    }

    async findall(): Promise<Place[]> {
        return await this.placeRepository
        .createQueryBuilder('p')
        .select([
            'p.id as id', 'p.nom as nom',
            'p.cord_x as cord_x', 'p.cord_y as cord_y'
        ])
        .getRawMany();
    }
}
