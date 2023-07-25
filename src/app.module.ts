import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoggerService } from './logger/logger.service';
import { HealthModule } from './health/health.module';
import { DbModule } from './db/db.module';
import appConfig from "./config/app.config";

@Module({
  imports: [
    UsersModule, 
    HealthModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [appConfig],
    }),
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
