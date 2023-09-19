import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { Form } from './entities/form.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from 'src/car/car.module';

@Module({
  imports: [TypeOrmModule.forFeature([Form]), CarModule],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
