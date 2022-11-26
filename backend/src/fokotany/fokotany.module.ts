import { Module } from '@nestjs/common';
import { FokotanyController } from './fokotany.controller';
import { FokotanyService } from './fokotany.service';

@Module({
  controllers: [FokotanyController],
  providers: [FokotanyService]
})
export class FokotanyModule {}
