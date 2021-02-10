<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## Resumo sobre o Projeto

Linguagem:
  - Node.js 
  - JavaScript

Framework
  - Nest.js

DB
  - Mongodb Atlas

Repositório
  - npm

Testes
  - Jest
  - Postman

Repositório
  - GitHub

CICD
  - GiLab


Premissas: 

- Período ddisponibilizado para o  exame: Segunda-Feira a partir das 13:30 até Quarta-feira 08:00


Atividades Entregues:

  - Definição e conceito da arquitetura do projeto (Linguagens/framework/db/etc..)
  - Criação lab local (WSL debian on windwos, visual studio code, postman, etc...)
  - CRUD classes de bot e messages
  - Conexão com o mongodb
  - Controle de versões pelo Github
  - Associação do projeto ao Gitlab
  - Testes via Postman para validação das classes
  - Inclusão de visualizadores ao projeto para avaliação

Backlog (Dívidas Técnicas)

  - Implementar logica de key uniq para classe de messages
  - Criar relação de ação entre a classe messages e a bot
  - Constuir estrtutura para testes unitários utilizando Jest
  - Incluir microserviços em conteiners
  - Criar comunicação entre os microserviços nos conteiners
  - Implementar CICD do Gitlab para aplicação
  - Criar esteira dev/qa/prod do produto

Dificuldades encontradas

- Atuação nos últimos anos do examinado em funções de liderança, em linhas de Devops e Produto.
- Nunca havia codificado em node.js houve um tempo para aprendizado alto definição da infraestrutura e implementação.
- Tempo super apertado, estive participando de outros processos seletivos no mesmo momento, o que dificultou um pouco mais a janela de tempo. Bem como os filhos em casa em pandemia :-)

Linha de raciocínio:

- De acordo com a descrição do projeto, observei a necessidade de criar  microserviços que iriam consumir API/Rest, e por esse motivo entendi que um bom caminho seria basear em node.js que me facilitaria a implementação. Fato que nunca havia trabalhado com a linguagem. Através  de um vídeo de exemplo no Youtube https://www.youtube.com/watch?v=L3JZhj9Odfg&list=RDCMUCs6nmQViDpUw0nuIx9c_WvA&start_radio=1 consegui entender como funcionam a estrutura de CRUD, e entendi também que havia um framework que facilitaria a construção da esteira da minha aplicação, foi onde adotei o uso do Nest. Quando foi a vez de escolher o banco de dados, pelos dados do exemplo já imaginei o uso de uma estrutura em Json e portanto pensei na simplicidade do Mongodb cujo já conhecia. Para facilitar meu teste utilizei o Mongodb Atlas para guardar os dados em uma nuvem opensource.
Enfim estou contente com o resultado, por sair de algo que não estava na minha rotina de trabalho a muito tempo e ter chego até este ponto. Como lições futuras, identifiquei somente no final a necessidade do projeto estar no GitLab, e ao acessa-lo pela primeira vez, observei que seria possível ter feito muita coisa lá dentro, criar praticamente toda a esteira, bem como depurar o projeto, mas o tempo acabou :-(

Sobre mim:

https://www.linkedin.com/in/lu%C3%ADs-ot%C3%A1vio-couto-1114072b/