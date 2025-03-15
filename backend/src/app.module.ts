import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',  // ✅ これまで通り正しい
      port: 5432,
      username: 'user',      // ✅ `docker-compose.yml` の `POSTGRES_USER` に合わせる
      password: 'password',  // ✅ `docker-compose.yml` の `POSTGRES_PASSWORD` に合わせる
      database: 'mydb',      // ✅ `docker-compose.yml` の `POSTGRES_DB` に合わせる
      autoLoadEntities: true,
      synchronize: true,  // ✅ 初回起動時にスキーマを作成
    })
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
