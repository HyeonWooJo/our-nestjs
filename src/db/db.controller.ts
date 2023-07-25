import { Controller, Get } from '@nestjs/common';
import { DbService } from './db.service';

@Controller('db')
export class DbController {
  constructor(private dbService: DbService) {}

  @Get('url')
  getUrl() {
    return this.dbService.getUrl();
  }
}