import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne} from 'typeorm'
import { TeacherEntity } from './teacher/teacher.entity';
import { CategoryEntity } from './category/category.entity';
import { IsUrl } from 'class-validator';
import { SlugeableEntity } from 'ydr-nest-common';
import { PlatformEntity } from './platform/platform.entity';
import { InstitutionEntity } from './institution/institution.entity';

@Entity('course')
export class CourseEntity extends SlugeableEntity {

    @Column('numeric', { nullable: true })
    price: number;

    @Column('varchar', { length: 255, unique: true})
    @IsUrl()
    url: string;

    @ManyToMany(type => TeacherEntity, teacher => teacher.courses, {
        cascade: true
    })
    @JoinTable()
    teachers: TeacherEntity[];

    @ManyToMany(type => CategoryEntity, category => category.courses, {
        cascade: true
    })
    @JoinTable()
    categories: CategoryEntity[];

    @ManyToOne(type => PlatformEntity, platform => platform.courses, {
        cascade: true
    })
    @JoinTable()
    platform: PlatformEntity;

    @ManyToOne(type => InstitutionEntity, institution => institution.courses, {
        cascade: true
    })
    @JoinTable()
    institution: InstitutionEntity;
}