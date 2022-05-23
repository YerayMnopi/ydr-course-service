import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forRoot(), CourseModule],
})
export class AppModule {}
