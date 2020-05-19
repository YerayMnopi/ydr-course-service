import { Entity, Column, OneToMany} from 'typeorm'
import { CourseEntity } from '../course.entity';
import { IsUrl } from "class-validator";
import { SlugeableEntity } from 'ydr-nest-common';

@Entity('platform')
export class PlatformEntity extends SlugeableEntity {
    
    @Column('varchar', { length: 255, nullable: true })
    @IsUrl()
    url: string;

    @OneToMany(type => CourseEntity, course => course.platform)
    courses: CourseEntity[];
}