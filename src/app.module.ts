import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoggerService } from './logger/logger.service';
import { HealthModule } from './health/health.module';

@Module({
  imports: [UsersModule, HealthModule],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
