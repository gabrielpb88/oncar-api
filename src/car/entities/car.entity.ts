import { Form } from 'src/form/entities/form.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  marca: string;
  @Column()
  modelo: string;
  @Column()
  ano: number;
  @Column()
  preco: number;
  @OneToMany((type) => Form, (form) => form.car)
  forms: Form[];
}
