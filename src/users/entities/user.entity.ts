import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'email', type: 'varchar', width: 255, nullable: false })
  email: string;

  @Column({ name: 'password', type: 'varchar', width: 255, nullable: false })
  password: string;
}
