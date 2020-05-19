import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { InstitutionEntity } from './institution.entity';
import { InstitutionService } from './institution.service';

@Crud({
    model: {
        type: InstitutionEntity
    }
})
@Controller('institutions')
export class InstitutionController implements CrudController<InstitutionEntity> {
    constructor(public service: InstitutionService){}
}