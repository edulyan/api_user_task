import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { TaskEntity } from './task.entity';
import { UserEntity } from './user.entity';

@Entity()
export class UserTaskEntity {
  $set(arg0: string, arg1: number[]) {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  taskId: string;
}
