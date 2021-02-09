import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IBot } from './interface/bot.interface';
import { BotDto } from './bot.dto';

@Injectable()
export class BotService {

  constructor(@InjectModel('Bot') private readonly botModel: Model<IBot>) { }

  // Get
  public async getBots(id:string) : Promise<any> {

    const bots = await this.botModel.find().exec();

    if(!bots || !bots[0]) {
      throw new HttpException('Not found', 404);
    }

    return bots;
  }

  // Post
  public async addBot(newBot: BotDto) {
    
    const bot = await new this.botModel(newBot);

    return bot.save();
  }

  // Delete
  public async deleteBot(botDel: BotDto) : Promise<BotDto> {
    const id = botDel.id;

    const bot = await this.botModel.deleteOne({ id }).exec();

    if(bot.deleteCount === 0) {
      throw new HttpException('Not found', 404);
    }

    return bot;
  }

  // Update
  public async putBot(botUpdate: BotDto) : Promise<BotDto> {
    
    const bot = await this.botModel.findByIdAndUpdate({ botUpdate }).exec();

    if(!bot) {
      throw new HttpException('Not found', 404);
    }

    return bot;
  }
}
