import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IsPublic } from './auth/decorators/is-public.decorator';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @IsPublic()
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @IsPublic()
  @Get()
  getProjectInfo(): string {
    return this.appService.getProjectInfo();
  }

  @Get('me')
  getMe(@CurrentUser() user: User) {
    return user; // 'Info extracted from JWT';
  }
}
