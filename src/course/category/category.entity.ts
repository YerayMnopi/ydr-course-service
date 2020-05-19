import { Entity, ManyToMany} from 'typeorm'
import { CourseEntity } from '../course.entity';
import { SlugeableEntity } from 'ydr-nest-common';

@Entity('category')
export class CategoryEntity  extends SlugeableEntity {

    @ManyToMany(type => CourseEntity, course => course.categories)
    courses: CourseEntity[];
}
