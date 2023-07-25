import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DbService } from "./db.service";
import { DbController } from "./db.controller";
import dbConfig from "../config/db.config";

@Module({
  imports: [ConfigModule.forFeature(dbConfig)],
  providers: [DbService],
  controllers: [DbController],
})
export class DbModule {}