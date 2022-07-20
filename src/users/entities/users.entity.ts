import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column({ nullable: true})
  phone!: number;

  @Column({
    unique: true,
  })
  email: string;

  @Column({ length: 60 })
  password: string;
}
