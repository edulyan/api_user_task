import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './dto/user.dto';
import { UserUpdate } from './dto/userUpdate.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.appService.getById(id);
  }

  @Post()
  create(@Body() user: User) {
    return (
      this.appService.create(user),
      `${user.userName}, ${user.firstName}, ${user.lastName}`
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(id);
  }

  @Put(':id')
  update(@Body() upUser: UserUpdate, @Param('id') id: string) {
    return this.appService.update(id, upUser);
  }
}
