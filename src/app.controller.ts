import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SampleDto } from './dto/sample.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query: SampleDto): string {
    return this.appService.getHello(query);
  }
}
