import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from 'src/entity/task.entity';
import { Task } from 'src/dto/task.dto';
import { TaskUpdate } from 'src/dto/taskUpdate.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private tasksRepository: Repository<TaskEntity>,
  ) {}

  async getAll(): Promise<TaskEntity[]> {
    return this.tasksRepository.find();
  }

  async getById(id: string): Promise<TaskEntity> {
    return this.tasksRepository.findOne(id);
  }

  async getByTitle(title: string): Promise<TaskEntity> {
    const task = await this.tasksRepository.findOne(title);
    return task;
  }

  async create(taskDto: Task): Promise<TaskEntity> {
    const newTask = this.tasksRepository.create(taskDto);
    return this.tasksRepository.save(newTask);
  }

  async remove(id: string): Promise<void> {
    await this.tasksRepository.delete(id);
  }

  async update(id: string, taskUpdate: TaskUpdate): Promise<void> {
    await this.tasksRepository.update(id, taskUpdate);
  }
}
