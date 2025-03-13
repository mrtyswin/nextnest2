import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api') // ← ここに'api'を追加（localhost:3001/apiにマッピングされる）
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { message: string } {
    return this.appService.getHello();
  }
}
