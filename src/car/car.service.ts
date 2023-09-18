import { Injectable, Inject } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';
import { log } from 'console';
import { CarRepository } from './car.repository';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly repo: Repository<Car>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    const car = this.repo.create();
    Object.entries(createCarDto).forEach(([key, value]) => {
      car[key] = value;
    });
    await this.repo.save(car);
    return car;
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.findOne(id);
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
