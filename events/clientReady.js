module.exports = {
  name: "ready", // Nome do evento, neste caso, 'ready'
  once: true, // Define se o evento deve ser disparado apenas uma vez
  execute(client) {
    // Função de execução chamada quando o evento ocorre
    // Loga no console que o bot está online, utilizando template strings para incluir o nome do usuário do bot
    console.log(`Logado como ${client.user.tag}!`);
  },
};
