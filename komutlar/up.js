const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(client.user.username)
.setThumbnail('https://cdn.discordapp.com/attachments/942130580030636043/942140154666164234/up-pixar.gif')
.addField('• Uptime', '```'+moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")+'```', true)
.addField('• Server', '```'+client.guilds.cache.size+'```', true)
.addField('• Users', '```'+client.users.cache.filter(a => !a.bot).size+'```', true)
.addField('• Ping', '```'+client.ws.ping.toFixed(0)+'```', true)
.addField('• Server Shards', '```0```', true));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'up'
};