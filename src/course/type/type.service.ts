import { Injectable } from '@nestjs/common';
import { TypeEntity } from './type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { slugify, BaseService } from 'ydr-nest-common';

@Injectable()
export class TypeService extends BaseService<TypeEntity>{
    constructor(@InjectRepository(TypeEntity) public readonly typeRepository: Repository<TypeEntity>){
        super(typeRepository);
    }

    getOrCreateByName(name: string): Promise<TypeEntity> {
        const slug = slugify(name);

        return super.getOrCreate({slug: slug}, {
            name: name,
            slug: slug,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
}
