// Importa o SlashCommandBuilder do discord.js para construir o comando.
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  // Utiliza o SlashCommandBuilder para definir o comando.
  data: new SlashCommandBuilder()
    .setName("ping") // Define o nome do comando como 'ping'.
    .setDescription("Responde com Pong!"), // Define a descrição que será mostrada na interface do usuário.

  // A função execute é chamada quando o comando é invocado.
  async execute(interaction) {
    // Responde à interação com a mensagem 'Pong!'.
    await interaction.reply("Pong!");
  },
};
