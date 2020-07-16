const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
 
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(config.prefix)) return;
  if (message.content.startsWith(`<@${client.user.id}`)) return;
  
  let args = message.content.split(" ").slice(1);
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  try {
    let commandFile = require(`./commands/${command}.js`);
    delete require.cache[require.resolve(`./commands/${command}.js`)];
    return commandFile.run(client, message, args);
  } catch (err) {
    console.error("Erro:" + err)
  }
  });

client.on("ready", () => {
let activities = [
    `Utilize ${config.prefix}ajuda para saber meus comandos`,
    `Estou em ${client.guilds.cache.size} servidores!`,
    `Oi sou Kukito!`,
    `Meu pai o CD é muito legal!`
],
i = 0
setInterval(() => client.user.setActivity(`${activities[i++ %
activities.length]}`, {
 type: "PLAYING" 
}), 1000 * 60); //WATCHING, LISTENING, PLAYING, STREAMING
  client.user
    .setStatus("idle") //idle, dnd, online, invisible
    .catch(console.log);
console.log("olá Otaku! Eu sou o Kukito!")
});


client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token