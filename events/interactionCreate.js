module.exports = {
  name: "interactionCreate", // Nome do evento
  async execute(interaction, client) {
    // Função assíncrona para lidar com o evento
    // Verifica se a interação é um comando slash
    if (!interaction.isCommand()) return;

    // Tenta encontrar o comando invocado no cache de comandos do cliente
    const command = client.commands.get(interaction.commandName);

    // Se o comando não existir, simplesmente retorna e não faz nada
    if (!command) return;

    try {
      // Executa o comando correspondente, passando a interação como argumento
      await command.execute(interaction);
    } catch (error) {
      // Em caso de erro, loga o erro no console e informa ao usuário
      console.error(error);
      await interaction.reply({
        content: "Erro ao executar esse comando!",
        ephemeral: true,
      });
    }
  },
};
