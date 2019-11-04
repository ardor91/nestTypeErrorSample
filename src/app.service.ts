import { Injectable } from '@nestjs/common';
import { SampleDto } from './dto/sample.dto';

@Injectable()
export class AppService {
  getHello(query: SampleDto): string {
    console.log("Typeof query.level: ", typeof query.level);
    return 'Hello World!';
  }

  postHello(query: SampleDto): string {
    console.log("Typeof query.level: ", typeof query.level);
    return 'Hello World!';
  }
}
