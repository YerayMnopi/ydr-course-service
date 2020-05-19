import { Module } from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { InstitutionController } from './institution.controller';
import { InstitutionEntity } from './institution.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ InstitutionEntity ])], 
  providers: [InstitutionService],
  controllers: [InstitutionController],
  exports: [InstitutionService]
})
export class InstitutionModule {}
