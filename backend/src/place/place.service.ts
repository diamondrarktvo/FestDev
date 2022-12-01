import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from 'src/entities/Place';
import { Repository } from 'typeorm';
import { CreatePlaceDto } from './dto/place.dto';

@Injectable()
export class PlaceService {
    constructor(
        @InjectRepository(Place)
        private placeRepository: Repository<Place>
    ) {}

    async create(donnees: CreatePlaceDto):  Promise<void> {
        await this.placeRepository
        .createQueryBuilder()
        .insert()
        .into(Place)
        .values({
            nom: donnees.nom,
            cordX: donnees.cord_x,
            cordY: donnees.cord_y,
            idFokotany: donnees.fokotany_id
        })
        .execute();
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
