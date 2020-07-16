const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("MENAGE_MESSAGES"))
  return message.reply("Você não tem permissão pra usar esse comando");
const deleteCount = parseInt(args[0], 10);
if (!deleteCount || deleteCount <1 || deleteCount >100) 
  return message.reply(":x: você digitou um número invalido escolha um número de 1 à 100");
  
const fetched = await message.channel.messages.fetch({ limit: deleteCount + 1});
message.channel
  .bulkDelete(fetched)
  message.channel.send(`${args[0] as mensagens foram limpas com sucesso`)  
  .catch(error)
  
}