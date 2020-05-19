import { Injectable } from '@nestjs/common';
import { TeacherEntity } from './Teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { slugify, BaseService } from 'ydr-nest-common';

@Injectable()
export class TeacherService extends BaseService<TeacherEntity>{
    constructor(@InjectRepository(TeacherEntity) public readonly teacherRepository: Repository<TeacherEntity>){
        super(teacherRepository);
    }

    getOrCreateByName(name: string): Promise<TeacherEntity> {
        const slug = slugify(name);

        return super.getOrCreate({slug: slug}, {
            name: name,
            slug: slug,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }

}
