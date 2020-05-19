import { Controller } from '@nestjs/common';
import { PlatformEntity } from './platform.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { PlatformService } from './platform.service';

@Crud({
    model: {
        type: PlatformEntity
    }
})
@Controller('platforms')
export class PlatformController implements CrudController<PlatformEntity> {
    constructor(public service: PlatformService){}
}
