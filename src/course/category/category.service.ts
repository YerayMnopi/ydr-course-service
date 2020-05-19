import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { slugify, BaseService } from 'ydr-nest-common';

@Injectable()
export class CategoryService extends BaseService<CategoryEntity>{
    constructor(@InjectRepository(CategoryEntity) public readonly categoryRepository: Repository<CategoryEntity>){
        super(categoryRepository);
    }

    getOrCreateByName(name: string): Promise<CategoryEntity> {
        const slug = slugify(name);

        return super.getOrCreate({slug: slug}, {
            name: name,
            slug: slug,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
}
