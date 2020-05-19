import { Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm'
import { CourseEntity } from '../course.entity';
import { SlugeableEntity } from 'ydr-nest-common';
import { IsUrl, IsOptional } from 'class-validator';

@Entity('teacher')
export class TeacherEntity extends SlugeableEntity {

    @Column('varchar', { length: 255, nullable: true })
    @IsUrl()
    @IsOptional()
    url: string;

    @ManyToMany(type => CourseEntity, course => course.teachers)
    courses: CourseEntity[];
}