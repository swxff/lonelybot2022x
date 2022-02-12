const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://cdn.discordapp.com/attachments/941759205977772114/942118231244681266/standard_3.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Sunucu Menüsüne Hoş Geldiniz 😇**
\`\`\`${client.user.username} Kullanırken @CloudUP rolünü en yukarıda tutunuz.\`\`\`

❌ **\`${client.ayarlar.prefix}yasak-tag-sistem\`
Sunucunuz için güvenliği arttırın

✨ \`${client.ayarlar.prefix}oto-isim-sistem\`
Sunucunuza giren kullanıcıya istediğiniz şekilde otomatik isim ile adlandırmış yapabilirsin
 
\`${client.ayarlar.prefix}komut-mesaj-sistem\`**
Sunucunuz için istediğiniz kadar **komut & **cevap** oluşturabilirsin**

❕ \`${client.ayarlar.prefix}fake-hesap-sistem\`**
Sunucunuza giren kullanıcı __5 gün__ içerisin de hesabını oluşturmuş ise cezalı verir

🚀 \`${client.ayarlar.prefix}sunucu-tema-sistem\`**
Topluluk bağışları ile sunucu şablonlarına sahip ol! **${client.ayarlar.prefix}sunucu-kur** kullanabilirsin**

🐝 \`${client.ayarlar.prefix}kanal arındır\`**
Sunucunuzda ki tüm **kanalları** silerek yardımcı olur (**Sunucu Sahibi**)

🐝 \`${client.ayarlar.prefix}rol arındır\`
Sunucunuzda ki tüm **rolleri** silerek yardımcı olur (**Sunucu Sahibi**)
**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sv', 'server'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu'
};