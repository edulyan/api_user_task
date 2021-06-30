import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '20012002',
  database: 'pr_users_tasks',
  synchronize: true,
  entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
};
