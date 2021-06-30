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
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  taskId: number;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  userEntity: UserEntity;

  @OneToOne(() => TaskEntity)
  @JoinColumn()
  taskEntity: TaskEntity;
}
