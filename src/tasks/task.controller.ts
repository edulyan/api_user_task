import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from 'src/dto/task.dto';
import { TaskUpdate } from 'src/dto/taskUpdate.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAll() {
    return this.taskService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.taskService.getById(id);
  }

  @Post()
  create(@Body() task: Task) {
    return (
      this.taskService.create(task),
      `${task.title}, ${task.start_date}, ${task.end_date}, ${task.description}`
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }

  @Put(':id')
  update(@Body() upTask: TaskUpdate, @Param('id') id: string) {
    return this.taskService.update(id, upTask);
  }
}
