const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {


  client.user.setGame(`تم التويتش من قبل اخوك فراس`,'https://www.twitch.tv/By:A7MD');
  console.log('BOT ONLINE OP SHOP AND LAST COMUNITY y7bkm');
});



client.login(process.env.BOT_TOKEN);
