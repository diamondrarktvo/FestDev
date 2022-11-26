import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Fako } from 'src/entities/Fako';
import { Repository } from 'typeorm';

@Injectable()
export class FakoService {
    constructor(
        @InjectRepository(Fako)
        private fakoRepository: Repository<Fako>
    ) {}

    async create(): Promise<void> {
        
    }
}
