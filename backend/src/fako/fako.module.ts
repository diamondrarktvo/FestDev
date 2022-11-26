import { Module } from '@nestjs/common';
import { FakoService } from './fako.service';
import { FakoController } from './fako.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fako } from 'src/entities/Fako';
import { Type } from 'src/entities/Type';
import { Utilisateur } from 'src/entities/Utilisateur';
import { Place } from 'src/entities/Place';

@Module({
  imports: [TypeOrmModule.forFeature([Fako, Type, Utilisateur, Place])],
  providers: [FakoService],
  controllers: [FakoController]
})
export class FakoModule {}
