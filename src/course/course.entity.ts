import { Entity, Column, ManyToMany, JoinTable, ManyToOne} from 'typeorm'
import { TeacherEntity } from './teacher/teacher.entity';
import { CategoryEntity } from './category/category.entity';
import { IsUrl } from 'class-validator';
import { SlugeableEntity } from 'ydr-nest-common';
import { PlatformEntity } from './platform/platform.entity';
import { InstitutionEntity } from './institution/institution.entity';
import { TypeEntity } from './type/type.entity';

@Entity('course')
export class CourseEntity extends SlugeableEntity {

    @Column('numeric', { nullable: true })
    price: number;

    @Column('bigint', { nullable: true, default: 0 })
    students: number;

    @Column('varchar', { length: 255 })
    @IsUrl()
    url: string;

    @ManyToOne(type => PlatformEntity, platform => platform.courses)
    @JoinTable()
    platform: PlatformEntity;

    @ManyToOne(type => InstitutionEntity, institution => institution.courses)
    @JoinTable()
    institution: InstitutionEntity;

    @ManyToOne(type => TypeEntity, type => type.courses)
    @JoinTable()
    type: TypeEntity;

    @ManyToMany(type => TeacherEntity, teacher => teacher.courses)
    @JoinTable()
    teachers: TeacherEntity[];

    @ManyToMany(type => CategoryEntity, category => category.courses)
    @JoinTable()
    categories: CategoryEntity[];
}