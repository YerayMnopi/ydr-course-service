import { Test, TestingModule } from '@nestjs/testing';
import { CourseService } from './course.service';
import { CourseCreateDTO, courseCreateDTOFactory } from 'ydr-course-artifact';

describe('CourseService', () => {
  let service: CourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseService],
    }).compile();

    service = module.get<CourseService>(CourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create course', async() => {
    const request: CourseCreateDTO = courseCreateDTOFactory();
    const createdCourse = service.create(request);

    expect(createdCourse).toBeTruthy();
  });
});
