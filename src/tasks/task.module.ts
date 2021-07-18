import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from 'src/entity/task.entity';
import { UserEntity } from 'src/entity/user.entity';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TypeOrmModule.forFeature([TaskEntity, UserEntity])],
})
export class TaskModule {}
