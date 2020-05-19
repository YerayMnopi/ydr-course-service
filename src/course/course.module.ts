import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseEntity } from './course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './course.controller';
import { InstitutionModule } from './institution/institution.module';
import { PlatformModule } from './platform/platform.module';
import { TeacherModule } from './teacher/teacher.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([ CourseEntity ]), InstitutionModule, PlatformModule, TeacherModule, CategoryModule],
  providers: [CourseService],
  controllers: [CourseController],
  exports: [CourseService]
})
export class CourseModule {}
