// import { Args, Mutation, Resolver } from '@nestjs/graphql';
// import { TaskService } from 'src/tasks/task.service';
// import { TaskEntity } from 'src/entity/task.entity';
// import { UserTaskEntity } from 'src/entity/users_tasks.entity';
// import { AppService } from 'src/app.service';

// @Resolver()
// export class UserTaskResolver {
//   constructor(private readonly taskService: TaskService, private readonly userService: AppService,) {}

//   @Mutation(() => Boolean)
//   async addUserTask(
//     @Args('userId', () => Int) userId: number,
//     @Args('taskId', () => Int) taskId: number,
//   ) {
//     await UserTaskEntity.create({ userId, taskId }).save();
//     return true;
//   }
// }
