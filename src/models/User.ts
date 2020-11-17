import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  college: string;

  @Column()
  course: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;
}
