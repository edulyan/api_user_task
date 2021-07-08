import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { stringify } from 'querystring';
import { AppService } from 'src/app.service';
import { UserTaskDto } from 'src/dto/userTask.dto';
import { TaskEntity } from 'src/entity/task.entity';
import { UserEntity } from 'src/entity/user.entity';
import { UserTaskEntity } from 'src/entity/users_tasks.entity';
import { TaskService } from 'src/tasks/task.service';
import { Repository } from 'typeorm';

@Injectable()
export class UserTaskService {
  constructor(
    @InjectRepository(UserTaskEntity)
    private userTaskRepository: Repository<UserTaskEntity>,
    private taskRepository: Repository<TaskEntity>,
    private userRepository: Repository<UserEntity>,
    private userService: AppService,
    private taskService: TaskService,
  ) {}

  async create(userTaskDto: UserTaskDto): Promise<UserTaskEntity> {
    const newUserTask = this.userTaskRepository.create(userTaskDto);
    return this.userTaskRepository.save(newUserTask);
  }

  async getById(id: string) {
    const userInfo = await this.userService.getById(id);
    const taskInfo = await this.taskService.getById(id);

    const ut = [userInfo, taskInfo];

    return ut;
  }
}

// const username = await this.userService.getById(userTaskDto.userId);
//     const tasktitle = await this.taskService.getById(userTaskDto.taskId);
//     newUserTask.$set('user_entity', [username.id]);
//     newUserTask.$set('task_entity', [tasktitle.id]);

// return this.userService.getById(id), this.taskService.getById(id);
