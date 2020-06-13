import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { TypeEntity } from './type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ TypeEntity ])], 
  providers: [TypeService],
  controllers: [TypeController],
  exports: [TypeService]
})
export class TypeModule {}
