import { Module } from '@nestjs/common';
import { FakoService } from './fako.service';
import { FakoController } from './fako.controller';

@Module({
  providers: [FakoService],
  controllers: [FakoController]
})
export class FakoModule {}
