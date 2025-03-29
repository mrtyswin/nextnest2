import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from './post.entity';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database', // ✅ 絶対にこれが正しい！
      port: 5432,
      username: 'user',
      password: 'password',
      database: 'mydb',
      entities: [Post],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Post]),
  ],
  controllers: [AppController, PostController],
  providers: [AppService, PostService],
})
export class AppModule {}