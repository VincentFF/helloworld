import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHome(): Promise<{ message: string; visits: number }> {
    const visits = await this.appService.recordVisit();
    return { message: 'Hello World!', visits };
  }
}
