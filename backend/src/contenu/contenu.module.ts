import { Module } from '@nestjs/common';
import { ContenuService } from './contenu.service';
import { ContenuController } from './contenu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contenu } from 'src/entities/Contenu';
import { Admin } from 'src/entities/Admin';

@Module({
  imports: [TypeOrmModule.forFeature([Contenu, Admin])],
  providers: [ContenuService],
  controllers: [ContenuController]
})
export class ContenuModule {}
