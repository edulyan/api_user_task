import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppService } from 'src/app.service';
import { UserTaskDto } from 'src/dto/userTask.dto';
import { UserEntity } from 'src/entity/user.entity';
import { UserTaskEntity } from 'src/entity/users_tasks.entity';
import { TaskService } from 'src/tasks/task.service';
import { Repository } from 'typeorm';

@Injectable()
export class UserTaskService {
  constructor(
    @InjectRepository(UserTaskEntity)
    private userTaskRepository: Repository<UserTaskEntity>,
    private userService: AppService,
    private taskService: TaskService,
  ) {}

  async create(userTaskDto: UserTaskDto): Promise<UserTaskEntity> {
    const newUserTask = this.userTaskRepository.create(userTaskDto);
    const username = await this.userService.getById(userTaskDto.userId);
    const tasktitle = await this.taskService.getById(userTaskDto.taskId);
    await newUserTask.$set('user_entity', [username.id]);
    await newUserTask.$set('task_entity', [tasktitle.id]);
    return this.userTaskRepository.save(newUserTask);
  }
}
