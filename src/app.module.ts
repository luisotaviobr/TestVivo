import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BotsModule } from "./bot/bot.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/botsApiVivo'),
    BotsModule
  ],
})

export class AppModule {}