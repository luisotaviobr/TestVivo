import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('bots')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param('id') id: string): string {
    return this.appService.getHello();
  }

  @Post()
  salvar(@Body() data:string ){ 
    return this.appService.getHello();
  }

  @Put()
  alterar(@Body() data:string) {
    return this.appService.getHello();
  }

  @Delete()
  deletar(@Body() data:string) {
    return this.appService.getHello();
  }
}
