import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { TaskEntity } from './task.entity';
import { UserTaskEntity } from './users_tasks.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @ManyToMany(() => TaskEntity, () => UserTaskEntity)
  tasks: TaskEntity;
}
