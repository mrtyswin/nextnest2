import { DataSource } from 'typeorm';
import { Post } from './src/post.entity'; 
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'mydb',
  entities: [Post], 
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
