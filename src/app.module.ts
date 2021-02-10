import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BotsModule } from "./bot/bot.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dbTestVivo:Vivo1234@cluster0.ks8ex.mongodb.net/dbTestVivo?retryWrites=true&w=majority'),
    BotsModule
  ],
})

export class AppModule {}