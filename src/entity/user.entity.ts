import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { TaskEntity } from './task.entity';

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

  @ManyToMany(() => TaskEntity, (taskEntity) => taskEntity.users)
  us: UserEntity;
}
