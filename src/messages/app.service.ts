import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessagesDto } from './messages.dto';
import { IMessages } from './interface/messages.interface';

@Injectable()
export class MessageService {

  constructor(@InjectModel('Message') private readonly MessageModel: Model<IMessages>) { }

  getHello(): string {
    return 'Hello World!';
  }
 // Get
 public async getMessages(id:string) : Promise<any> {

  const mess = await this.MessageModel.find().exec();

  if(!mess || !mess[0]) {
    throw new HttpException('Not found', 404);
  }

  return mess;
}

// Post
public async addMessages(newMessage: MessagesDto) {
  
  const mess = await new this.MessageModel(newMessage);

  return mess.save();
}
  
}
