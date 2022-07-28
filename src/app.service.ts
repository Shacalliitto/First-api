// aonde a magica acontece

import { Injectable } from '@nestjs/common';
import { prependOnceListener } from 'process';

@Injectable()
export class AppService {
  getHello(): string { //GET default usado de exemplo
    return 'Hello World!';
  }

  getHair(name:string){ //POST feito pra aprender como são passados os parametros
    return `O cabelo do ${name} parece o do Cascão`
  }

  getPlayer(name:string){ //GET com tratativa de endpoint
    if(name=='Kobe') return 'r.i.p. 🙏🏽🏀'
    return `Mais inforações sobre o ${name} em https://www.nba.com/players`
  }

  data(){ //GET de objeto
    return {
      name: 'Leonan',
      idade: '26',
      aprendendo: 'nestJS'
    }
  }

}

