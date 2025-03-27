import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return { message: ' a NestJS!' };
  }
}// test hot-reload
// hot reload check again
