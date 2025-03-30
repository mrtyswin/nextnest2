// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Post } from './post.entity';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: join(__dirname, '..', '..', '.env'),
    }), // envは先に読み込まれるようにする

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'), // ← .env に DB_HOST=database と記載
        port: parseInt(config.get<string>('DB_PORT') || '5432'),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        entities: [Post],
        synchronize: true,
      }),
    }),

    TypeOrmModule.forFeature([Post]),
  ],
  controllers: [AppController, PostController],
  providers: [AppService, PostService],
})
export class AppModule {}
