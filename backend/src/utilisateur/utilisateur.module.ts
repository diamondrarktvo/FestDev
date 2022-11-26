import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from 'src/entities/Utilisateur';
import { ConfigModule } from '@nestjs/config';
import { Fako } from 'src/entities/Fako';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur, Fako]),
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
],
  providers: [UtilisateurService],
  controllers: [UtilisateurController]
})
export class UtilisateurModule {}
