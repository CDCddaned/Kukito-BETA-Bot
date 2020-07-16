const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
var list = [
  'https://pa1.narvii.com/5823/f10cce909b5bfa6f05f0af496558a16ed4840c06_hq.gif',
  'https://68.media.tumblr.com/3d93be7699a2ba8b4bc13a29a37b84ad/tumblr_odt2geMkpc1t86l7wo1_500.gif',
  'https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif',
  'https://pa1.narvii.com/5823/a3561ade23b7721461065cf6cc14fdfca2b0c340_hq.gif',
  'https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif',
  'https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
  'https://media1.tenor.com/images/bc5e143ab33084961904240f431ca0b1/tenor.gif?itemid=9838409',
  'https://pa1.narvii.com/5823/88d38f7dbb1a17ae47c557dc40f823200583d376_hq.gif',
  'https://media1.tenor.com/images/119b1e7802d1fb1039aec55f75e71cdc/tenor.gif?itemid=3531829',
  'https://pa1.narvii.com/6277/db2c346e5c2bb105a2686968281d6ee206840019_hq.gif',
  'https://media1.tenor.com/images/40711a5b00fcf9918ddef1aa483d993f/tenor.gif?itemid=11737410',
  'https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515',
  'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
  'http://pa1.narvii.com/5823/9c589ea8d3434ac60ea7ce4e3fc7d28337959937_hq.gif',
  'https://media1.tenor.com/images/c544c611a0cb5f6f2daf9dc848ad4d0d/tenor.gif?itemid=4763180',
  'http://pa1.narvii.com/5823/a1ff3fbec588fdde66dd24293f2220233ce42076_hq.gif',
  'https://68.media.tumblr.com/949e1364343734bb87cdde8b47b64be6/tumblr_onq159pW1L1u3p759o9_500.gif',
  'https://pa1.narvii.com/5823/f994370fd77d41d938ca41f14f2bae6a716fb18f_hq.gif',
  'https://media.giphy.com/media/QweWddrIQxlfi/giphy.gif',
  'https://pa1.narvii.com/5823/11e01b02a863643bc41effbdfc950013f411f7c1_hq.gif',
  'https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif',
  'https://data.whicdn.com/images/263429690/original.gif',
  'https://68.media.tumblr.com/e572d843d645c844207058623f8910c8/tumblr_nf1wmndkLd1u3b8qno1_500.gif',
  'https://media1.tenor.com/images/9be36a386cabf6638f5c578989853b38/tenor.gif?itemid=12192867'
];
  
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get
  
}