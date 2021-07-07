import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Task } from 'src/dto/task.dto';
import { User } from 'src/dto/user.dto';
import { UserTaskDto } from 'src/dto/userTask.dto';
import { UserTaskService } from './user_task.service';

@Controller('user_task')
export class UserTaskController {
  constructor(private readonly userTaskService: UserTaskService) {}

  @Post()
  create(@Body() userTaskDto: UserTaskDto) {
    return (
      this.userTaskService.create(userTaskDto),
      `${userTaskDto.userId}, ${userTaskDto.taskId} `
    );
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.userTaskService.getById(id);
  }
}
