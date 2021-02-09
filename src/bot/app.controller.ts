import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BotService } from './app.service';
import { BotDto } from './bot.dto'

@Controller('bots')
export class BotController {
  constructor(private readonly botService: BotService) {}

  @Get(':id')
  get(@Param('id') id: string): string {
    return this.botService.getBots(id);
  }

  @Post()
  post(@Body() bot: BotDto) {

    console.log("==> ", bot);

    return this.botService.addBot(bot);
  }

  @Put()
  put(@Body() bot: BotDto) {
    return this.botService.putBot(bot);
  }

  @Delete()
  delete(@Body() bot: BotDto) {
    return this.botService.deleteBot(bot);
  }
}
