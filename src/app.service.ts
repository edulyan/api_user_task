import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { UserUpdate } from './dto/userUpdate.dto';
import { UserEntity } from './entity/user.entity';
import { TaskEntity } from './entity/task.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async getAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async getById(id: string): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }

  async create(user: UserEntity, task: TaskEntity) {
    // const newUser = this.userRepository.create(user);
    // const newTask = this.taskRepository.create(task);

    // return this.userRepository.save(newUser), this.taskRepository.save(newTask);

    const newUser = this.userRepository.create(user);

    const taskich = getConnection().getRepository(TaskEntity);
    const defaultTask = taskich.create(task);
    user.tasks = [defaultTask];

    const savedNewUser: UserEntity = await this.userRepository.save(newUser);

    return savedNewUser;
  }

  async addTask(userId: number, taskId: number) {
    const userTarget = await this.userRepository.findOne(userId);
    const taskTarget = await this.taskRepository.findOne(taskId);

    userTarget.tasks.push(taskTarget);
    await this.userRepository.save(userTarget);

    return true;
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async update(id: string, userUpdate: UserUpdate): Promise<void> {
    await this.userRepository.update(id, userUpdate);
  }
}
