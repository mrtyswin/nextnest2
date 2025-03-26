import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')  // ✅ ここを追加！
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { message: string } {  
    return { message: this.appService.getHello() };  
  }
}
