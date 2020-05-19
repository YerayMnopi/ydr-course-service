import { Injectable } from '@nestjs/common';
import { CourseEntity } from './course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseCreateDTO } from 'ydr-course-artifact';
import { slugify, BaseService } from 'ydr-nest-common';
import { InstitutionService } from './institution/institution.service';
import { PlatformService } from './platform/platform.service';
import { TeacherService } from './teacher/teacher.service';
import { CategoryService } from './category/category.service';
import { TeacherEntity } from './teacher/teacher.entity';
import { CategoryEntity } from './category/category.entity';

@Injectable()
export class CourseService extends BaseService<CourseEntity>{
    constructor(
        @InjectRepository(CourseEntity) 
        private readonly courseRepository: Repository<CourseEntity>,
        private readonly institutionService: InstitutionService,
        private readonly platformService: PlatformService,
        private readonly teacherService: TeacherService,
        private readonly categoryService: CategoryService,
    ){
        super(courseRepository);
    }

    async create(courseToCreate: CourseCreateDTO): Promise<CourseEntity> {
        const institution = await this.institutionService.getOrCreateByName(courseToCreate.institution);

        const platform = await this.platformService.getOrCreateByName(courseToCreate.platform);

        const teachers: TeacherEntity[] = await Promise.all(
            courseToCreate.teachers.map((teacher: string) => this.teacherService.getOrCreateByName(teacher))
        );

        const categories: CategoryEntity[] = await Promise.all(
            courseToCreate.categories.map((category: string) => this.categoryService.getOrCreateByName(category))
        );

        const course = {...courseToCreate, institution, platform, teachers, categories};

        return this.courseRepository.save(course);
    }
}
