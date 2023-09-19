import { Car } from 'src/car/entities/car.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  telefone: string;
  @ManyToOne(() => Car, { nullable: false, eager: true })
  @JoinColumn({ name: 'car_id' })
  car: Car;
}
