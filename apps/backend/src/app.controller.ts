import { Controller, Get } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private prisma = new PrismaClient();

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('db-check')
  async dbCheck(): Promise<string> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return 'OK';
    } catch (_e) {
      return 'ERROR';
    }
  }
}
