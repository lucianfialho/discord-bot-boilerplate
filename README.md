# Discord Bot Boilerplate

## Introdução

Este boilerplate é uma base inicial para criar seu próprio bot para o Discord, utilizando Node.js e a biblioteca discord.js. Projetado com uma estrutura clara e exemplos de comandos e eventos, ele serve tanto para iniciantes quanto para desenvolvedores experientes que desejam aprender ou aprimorar suas habilidades na criação de bots para Discord.

## Pré-requisitos

Antes de começar, você precisará de:

- Node.js instalado em sua máquina.
- Uma conta no Discord e um bot criado no [Portal do Desenvolvedor Discord](https://discord.com/developers/applications).

## Configuração

1. **Clone o Repositório**:
   ````bash
   git clone https://github.com/lucianfialho/discord-bot-boilerplate.git```
   ````
2. **Instale as Dependências**: Navegue até a pasta do projeto e execute:
   ```bash
   npm install
   ```
3. **Configure as Variáveis de Ambiente**: Duplique o `.env.example` para `.env` e preencha os valores conforme necessário:
   ```bash
   DISCORD_TOKEN=seu_token_de_bot_aqui
   ```
4. **Inicie o Bot**:
   ```bash
   npm start
   ```

## Uso

Este boilerplate inclui exemplos de comandos e eventos para você começar. Aqui está um breve resumo de como eles funcionam:

### Comandos

- **Ping**: Um comando simples que responde com "Pong!" quando usado.

Para adicionar novos comandos, crie um arquivo na pasta `/commands` seguindo o exemplo do `ping.js`.

### Eventos

- **ClientReady**: Evento disparado quando o bot é iniciado e logado.
- **InteractionCreate**: Evento para lidar com interações, como comandos de barra.

Para adicionar novos eventos, crie um arquivo na pasta `/events` seguindo os exemplos fornecidos.

## Estrutura do Projeto

- `/commands`: Contém os comandos do bot.
- `/events`: Contém os manipuladores de eventos do bot.
- `index.js`: Ponto de entrada do bot, onde o cliente é inicializado e os comandos/eventos são carregados.
- `.env.example`: Um exemplo de arquivo de configuração para suas variáveis de ambiente.

## Contribuindo

Contribuições são sempre bem-vindas! Se você tem uma ideia para melhorar este boilerplate ou quer adicionar novas funcionalidades, sinta-se à vontade para fazer um fork do repositório, realizar suas alterações e enviar um Pull Request. Para mais informações, veja nosso guia de contribuição.

## Recursos de Aprendizado

- [Documentação oficial do Discord.js](https://discord.js.org/#/docs)
- [Guia Discord.js](https://discordjs.guide/)
- [Node.js](https://nodejs.org/en/docs/)

Explore estes recursos para aprofundar seus conhecimentos em JavaScript, Node.js, e desenvolvimento de bots para Discord.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE). Veja o arquivo `LICENSE` para mais detalhes.
