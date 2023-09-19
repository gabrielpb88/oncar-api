import { Injectable, Inject } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';
import { assign } from 'src/utils/assign';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly repo: Repository<Car>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    const car = this.repo.create();
    assign(createCarDto, car);
    await this.repo.save(car);
    return car;
  }

  async findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    return this.repo.find({
      where: { id },
      relations: {
        forms: true,
      },
    });
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    const car = await this.repo.findOneBy({ id });
    assign(updateCarDto, car);
    return this.repo.update(id, car);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
