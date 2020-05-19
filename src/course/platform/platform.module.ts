import { Module } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { PlatformController } from './platform.controller';
import { PlatformEntity } from './platform.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ PlatformEntity ])], 
  providers: [PlatformService],
  controllers: [PlatformController],
  exports: [PlatformService]
})
export class PlatformModule {}
