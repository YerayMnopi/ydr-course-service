import { Injectable } from '@nestjs/common';
import { InstitutionEntity } from './institution.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { slugify, BaseService } from 'ydr-nest-common';

@Injectable()
export class InstitutionService extends BaseService<InstitutionEntity>{
    constructor(@InjectRepository(InstitutionEntity) public readonly institutionRepository: Repository<InstitutionEntity>){
        super(institutionRepository);
    }

    getOrCreateByName(name: string): Promise<InstitutionEntity> {
        const slug = slugify(name);

        return super.getOrCreate({slug: slug}, {
            name: name,
            slug: slug,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
}
