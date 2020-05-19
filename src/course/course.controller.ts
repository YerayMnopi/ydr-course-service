import { Controller, Post, Body } from '@nestjs/common';
import { Crud, CrudController, BaseRouteName } from '@nestjsx/crud';
import { CourseEntity } from './course.entity';
import { CourseService } from './course.service';
import { CourseCreateDTO } from 'ydr-course-artifact';

@Crud({
  model: {
    type: CourseEntity
  },
  params: {
    id: {
      primary: true,
      type: 'uuid'
    }
  },
  routes: {
    exclude: ['createOneBase']
  }
})
@Controller('courses')
export class CourseController implements CrudController<CourseEntity> {
  constructor(public service: CourseService){}

  @Post()
  create(@Body() body: CourseCreateDTO) {
    console.log(body);
    return this.service.create(body);
  }
}
