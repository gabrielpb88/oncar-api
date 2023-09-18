import { Injectable } from "@nestjs/common";
import { CreateCarDto } from "./dto/create-car.dto";
import { Car } from "./entities/car.entity";

@Injectable()
export class CarRepository {
  
  constructor(private readonly cars = []) {}

  async save(car: Car) {
    this.cars.push(car)
  }

  async findAll() {
    return this.cars
  }
}