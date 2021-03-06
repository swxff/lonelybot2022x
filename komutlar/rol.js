const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(args[0] === 'arındır') {
if(message.author.id !== message.guild.owner.id) return message.channel.send(new Discord.MessageEmbed().setImage('https://cdn.discordapp.com/attachments/942132842954104842/942134151660838962/dddddd.png').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}rol arındır\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Dikkat et!')
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(message.author.username, message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/942130580030636043/942130826542456883/anime-animeboy-goth-gothicstyle-redeyes-laughing-dark-aesthetic-anime-boy-manga-comics-book-person-transparent-png-723215.png')
.setDescription(`${message.author} Sunucunun **Rollerini** silmek istediğinizden emin misin?

**Bu işlem geri alınamaz**!`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
resulter.delete();
});

no.on('collect', async reaction => {
resulter.delete();
});

})
};
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'rol'
};