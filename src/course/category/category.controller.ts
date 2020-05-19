import { Controller } from '@nestjs/common';
import { CategoryEntity } from './category.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { CategoryService } from './category.service';

@Crud({
    model: {
      type: CategoryEntity
    }
  })
@Controller('categories')
export class CategoryController implements CrudController<CategoryEntity> {
    constructor(public service: CategoryService){}
}
