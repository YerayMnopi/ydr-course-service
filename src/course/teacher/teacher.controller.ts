import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { TeacherEntity } from './teacher.entity';
import { TeacherService } from './teacher.service';

@Crud({
    model: {
        type: TeacherEntity
    }
})
@Controller('teachers')
export class TeacherController  implements CrudController<TeacherEntity> {
    constructor(public service: TeacherService){}
}
