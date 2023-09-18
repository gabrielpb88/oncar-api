import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
