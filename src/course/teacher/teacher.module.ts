import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TeacherEntity } from './teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ TeacherEntity ])], 
  providers: [TeacherService],
  controllers: [TeacherController],
  exports: [TeacherService]
})
export class TeacherModule {}
