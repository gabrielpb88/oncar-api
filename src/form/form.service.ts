import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Repository } from 'typeorm';
import { Form } from './entities/form.entity';
import { assign } from 'src/utils/assign';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private readonly repo: Repository<Form>,
  ) {}
  async create(createFormDto: CreateFormDto) {
    const form = await this.repo.create();
    assign(createFormDto, form);
    await this.repo.save(form);
    return form;
  }

  async findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
