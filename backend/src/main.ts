import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

//  あとで消す
  console.log('>>> ENVチェック');
  
  console.log('DB_USER:', config.get('DB_USER'));
  console.log('DB_PASSWORD:', config.get('DB_PASSWORD'));
  console.log('DB_HOST:', config.get('DB_HOST'));
  console.log('DB_PORT:', config.get('DB_PORT'));

  app.enableCors();
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
