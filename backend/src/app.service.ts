import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return { message: ' バックエンドの値だよ!' };
  }
}// test hot-reload
// hot reload check again
