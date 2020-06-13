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
import { TypeService } from './type/type.service';

@Injectable()
export class CourseService extends BaseService<CourseEntity>{
    constructor(
        @InjectRepository(CourseEntity) 
        private readonly courseRepository: Repository<CourseEntity>,
        private readonly institutionService: InstitutionService,
        private readonly platformService: PlatformService,
        private readonly teacherService: TeacherService,
        private readonly categoryService: CategoryService,
        private readonly typeService: TypeService,
    ){
        super(courseRepository);
    }

    async create(courseToCreate: CourseCreateDTO): Promise<CourseEntity> {
        let courseInDb = await this.getOrCreateByName(courseToCreate.name);

        courseInDb = await this.createForeignKey('institution', this.institutionService, courseToCreate.institution, courseInDb);
        courseInDb = await this.createForeignKey('platform', this.platformService, courseToCreate.platform, courseInDb);
        courseInDb = await this.createForeignKey('type', this.typeService, courseToCreate.type, courseInDb);
        courseInDb = await this.createManyToMany('teachers', this.teacherService, courseToCreate.teachers, courseInDb);
        courseInDb = await this.createManyToMany('categories', this.categoryService, courseToCreate.categories, courseInDb);

        return this.courseRepository.save(courseInDb);

    }

    getOrCreateByName(name: string): Promise<CourseEntity> {
        const slug = slugify(name);

        return super.getOrCreate({slug: slug}, {
            name: name,
            slug: slug,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }

    async createForeignKey(
        key: string,
        service: PlatformService | InstitutionService | TypeService,
        value: string,
        courseInstance: CourseEntity,
    ): Promise<CourseEntity> {
        if (!value) {
            return courseInstance;
        }

        const relationInstance = await service.getOrCreateByName(value);

        courseInstance[key] = relationInstance;

        return courseInstance;
    }

    async createManyToMany(
        key: string,
        service: TeacherService | CategoryService,
        values: string[],
        courseInstance: CourseEntity,
    ): Promise<CourseEntity> {
        if (!values) {
            return courseInstance;
        }

        const relations: any[] = await Promise.all(
            values.map((value: string) => service.getOrCreateByName(value))
        );

        if (courseInstance[key]) {
            relations
                .filter((relation) => !courseInstance[key].map(relationInDb => relationInDb.id).includes(relation.id))
                .forEach((relation) => courseInstance[key].push(relation))
            ;
        } else {
            courseInstance[key] = relations;
        }

        return courseInstance;
    }
}
