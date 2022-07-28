import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //GET default usado de exemplo
  getHello(): string { 
    return this.appService.getHello();
  }

  @Post() //POST feito pra aprender como são passados os parametros
  getHair(): string{ 
    return this.appService.getHair('Ronaldo Fenomeno');
  }

  @Get('/jogadores/:name') //GET com tratativa de endpoint
  getPlayer(@Param('name') name:string): string { 
    return this.appService.getPlayer(name);
  }

  @Get('/data') //GET de objeto
  data(){
    return this.appService.data()
  }

}
