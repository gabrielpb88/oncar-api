import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Repository } from 'typeorm';
import { Form } from './entities/form.entity';
import { assign } from 'src/utils/assign';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/car/entities/car.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private readonly repo: Repository<Form>,
    @InjectRepository(Car)
    private readonly carRepo: Repository<Car>,
  ) {}
  async create(createFormDto: CreateFormDto) {
    const form = await this.repo.create();
    assign(createFormDto, form);
    form.car = await this.carRepo.findOneBy({ id: createFormDto.car_id });
    await this.repo.save(form);
    return form;
  }

  async findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: { car: true } });
  }

  async update(id: number, updateFormDto: UpdateFormDto) {
    const form = await this.findOne(id);
    assign(updateFormDto, form);
    await this.repo.update(id, form);
    return form;
  }

  remove(id: number) {
    return this.repo.delete({ id });
  }
}
