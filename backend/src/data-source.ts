import { DataSource } from 'typeorm';
import { Post } from './post.entity'; // ← これが必要

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'user',
  password: 'password',
  database: 'mydb',
  entities: [Post],
  synchronize: false,
  migrations: ['src/migrations/*.ts'],
});
