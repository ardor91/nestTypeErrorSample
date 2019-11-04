import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { SampleDto } from './dto/sample.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() query: SampleDto): string {
    return this.appService.getHello(query); // not working sample. query.level is a string
  }

  @Post()
  postHello(@Body() body: SampleDto): string {
    return this.appService.postHello(body); // working sample. body.level is a number
  }
}
