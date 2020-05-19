import { Entity, Column, OneToMany} from 'typeorm'
import { CourseEntity } from '../course.entity';
import { SlugeableEntity } from 'ydr-nest-common';
import { IsUrl, IsOptional } from 'class-validator';

@Entity('institution')
export class InstitutionEntity extends SlugeableEntity {

    @Column('varchar', { length: 255, nullable: true})
    @IsUrl()
    @IsOptional()
    url: string;

    @OneToMany(type => CourseEntity, course => course.institution)
    courses: CourseEntity[];
}