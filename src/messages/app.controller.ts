import { Controller, Get, Param} from '@nestjs/common';
import { MessageService } from './app.service';

@Controller('messages')
export class BotController {

  constructor(private readonly msgService: MessageService) { }

  @Get(':id')
  getHello(@Param('id') id: string): string {

    return this.msgService.getHello();
  }

}