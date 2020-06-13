import { Entity, Column, OneToMany} from 'typeorm'
import { CourseEntity } from '../course.entity';
import { SlugeableEntity } from 'ydr-nest-common';
import { IsUrl, IsOptional } from 'class-validator';

@Entity('type')
export class TypeEntity extends SlugeableEntity {

    @Column('varchar', { length: 255, nullable: true})
    @IsUrl()
    @IsOptional()
    url: string;

    @OneToMany(type => CourseEntity, course => course.type)
    courses: CourseEntity[];
}