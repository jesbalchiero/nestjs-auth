import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProjectInfo(): string {
    return `
      <h1>Projeto de Autenticação NestJS</h1>
      <p>O projeto é uma aplicação de autenticação desenvolvida utilizando NestJS, que utiliza tokens JWT para autenticação de usuários.</p>
      <p>A aplicação inclui funcionalidades de criação de usuários, consulta de usuários por diversos critérios (ID, email, nome), e autenticação de usuários através de um endpoint de login.</p>
      <p>Foi implementado utilizando as melhores práticas de segurança e boas práticas de Typescript, além de integração com Prisma para manipulação do banco de dados SQLite.</p>
      <p>A documentação da API está disponível através do Swagger. Para mais informações, consulte a <a href="/api">documentação da API</a>.</p>
      <br>
      <h1>NestJS Authentication Project</h1>
      <p>The project is an authentication application developed using NestJS, which utilizes JWT tokens for user authentication.</p>
      <p>The application includes functionalities for user creation, user retrieval based on various criteria (ID, email, name), and user authentication through a login endpoint.</p>
      <p>It has been implemented using best security practices and Typescript best practices, along with integration with Prisma for SQLite database manipulation.</p>
      <p>Comprehensive API documentation is available through Swagger. For more information, see the <a href="/api">API documentation</a>.</p>
    `;
  }
}
