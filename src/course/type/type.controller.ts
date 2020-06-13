import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { TypeEntity } from './type.entity';
import { TypeService } from './type.service';

@Crud({
    model: {
        type: TypeEntity
    }
})
@Controller('types')
export class TypeController implements CrudController<TypeEntity> {
    constructor(public service: TypeService){}
}