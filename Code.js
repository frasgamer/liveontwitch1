const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {


  client.user.setGame(`تم التويتش من قبل اخوك فراس`,'https://www.twitch.tv/By:A7MD');
});



client.login(process.env.BOT_TOKEN);
