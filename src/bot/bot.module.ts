
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BotController } from './app.controller';
import { BotService } from './app.service';
import { BotSchema } from './schemas/bot.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Bot', schema: BotSchema, }]),
    ],
    controllers: [BotController],
    providers: [BotService],
})

export class BotsModule {}