const express = require('express');
const app = express();
 app.use('/ping', (req, res) => {
    res.send(new Date());
});
app.listen(3000, () => {
});
const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require("ms");
const db = require('quick.db');
require("events").EventEmitter.defaultMaxListeners = 50000;
const inlinereply = require('discord-reply');
const disbut = require('discord-buttons');
const probot = require("probot-tax");
////Bot Status
client.on("ready", () => {
  console.log(`[ - Bot is Online - ]`);
  console.log(`Name Bot : ${client.user.username}`);
  console.log(`Guilds : ${client.guilds.cache.size}`);
  console.log(`Users : ${client.users.cache.size}`);
  console.log(`Channels : ${client.channels.cache.size}`);
});
client.on('ready', () => {
  console.log(`🤠 : ${client.user.username}`);
  client.user.setStatus('dnd');///dnd/online/idle
  let status = [`i love my discord Server `,`دروس لامحدودة`];
  setInterval(()=>{
  client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
})
///Definitions 
const prefix = "*";///your prefix
const owner = ["855015495585759239",""]///owner id
const supportServer = "unlimited-lessons-drws-lmhdwd-1026502677384921108"///server support
const help_info_color = "#17ac86"///color in help
const color = "#ff0000"//main color
const moreInfo = `Need more info? use ${prefix}help`
const line = "https://cdn.discordapp.com/attachments/993548517438140576/1009868520416350238/standard_11.gif"///url line link
const صح = "<a:901025165822017546:984063006914785350>";//react
const غلط = "<a:903638682601418845:984063988621000744>";//react

///brodcast

client.on("message", message => {
  if (message.content.startsWith(prefix + "bc")) {
    let c = "0";
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`> ** __You Don't Have Permisssions__**`);

    message.delete();
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let noargs = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(`> ** __Pls Type Your Broadcast Message__**`)
.setColor(color)
      .setTimestamp()
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
    if (!args) return message.channel.send(message.author, noargs);
    message.guild.members.cache.forEach(m => {
        m.send(`${args}\n ${m}`).then(c++).catch(err => {
      if(err) {
        console.log(err)
      }
      });
      });
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(
        `> ** __Done Send Your Broadcast Message To ${message.guild.memberCount} Members__ **`
      )
      .setTimestamp()
.setColor(color)
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel
      .send(`> **__Send Your Message Pls Wait__ **`)
      .then(me => {
        me.edit(message.author, embed);
      });
  }

})


//help
client.on("message", basel => { 
 if(basel.content.startsWith(prefix + "help")) { 
let embed = new Discord.MessageEmbed() 
.setDescription(`Weclome this is my help menu ${prefix}bc رسالة = يرسل للجميع`)
.setFooter(`AnimintS`)
.setTimestamp() 
basel.author.send(embed)
}
});


///token

client.login("Token")
