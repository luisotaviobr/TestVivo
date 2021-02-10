
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesController } from './app.controller';
import { MessageService } from './app.service';
import { MessagesSchema } from './schemas/messages.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Messages', schema: MessagesSchema, }]),
    ],
    controllers: [MessagesController],
    providers: [MessageService],
})

export class MessagesModule {}