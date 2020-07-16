const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("MENAGE_MESSAGES"))
  return message.reply("Você não tem permissão pra usar esse comando");
const deleteCount = parseInt(args[0], 10);
if (!deleteCount )  
  
}