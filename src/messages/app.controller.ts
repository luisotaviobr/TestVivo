import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { MessageService } from './app.service';
import { MessagesDto } from './messages.dto'

@Controller('messages')
export class MessagesController {

  constructor(private readonly msgService: MessageService) { }

  @Get(':id')
  get(@Param('id') id: string): string {
    //return this.msgService.getMessages(id);
    return ;
  }
  @Post()
  post(@Body() mens: MessagesDto) {

    console.log("==> ", mens);
    return;
    //return this.botService.addBot(bot);
  }
}