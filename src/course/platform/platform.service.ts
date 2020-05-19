import { Injectable } from '@nestjs/common';
import { PlatformEntity } from './Platform.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { slugify, BaseService } from 'ydr-nest-common';

@Injectable()
export class PlatformService extends BaseService<PlatformEntity>{
    constructor(@InjectRepository(PlatformEntity) public readonly platformRepository: Repository<PlatformEntity>){
        super(platformRepository);
    }

    getOrCreateByName(name: string): Promise<PlatformEntity> {
        const slug = slugify(name);

        return super.getOrCreate({slug: slug}, {
            name: name,
            slug: slug,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
}
