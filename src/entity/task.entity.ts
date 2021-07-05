import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { UserTaskEntity } from './users_tasks.entity';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  status: boolean;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  description: string;

  @ManyToMany(() => UserEntity, () => UserTaskEntity)
  users: UserEntity[];
}
