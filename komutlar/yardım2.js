const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://cdn.discordapp.com/attachments/941759205977772114/942111517397098556/xddx.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Moderasyon Menüsüne Hoş Geldiniz 😇**
\`\`\`${client.user.username} Kullanırken @CloudUP rolünü en yukarıda tutunuz.\`\`\`

**\`${client.ayarlar.prefix}mute-sistem\`
Chat ve Seste mute için güzel sistem

\`${client.ayarlar.prefix}jail-sistem\`
Etiketlediğiniz Üyeyi karantina altına al

❌ \`${client.ayarlar.prefix}ban-sistem\`
Etiketlediğiniz üyeyi sunucunuzdan yasaklarsınız

🌹 \`${client.ayarlar.prefix}toplu-rol-sistem\`
Toplu rol ile hem alıp hem de verebileceğiniz sistem

🌊 \`${client.ayarlar.prefix}sayaç-sistem\`**
**Giriş Çıkış**, **Sayaç** hem de **otomatik rol** aynı anda çalıştır

🛎️ **\`${client.ayarlar.prefix}kısıtlamalar\`**
**Selam, küfür, reklam, büyük harf,** içerikler vardır
**
**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mod'],
  permLevel: 0
}

exports.help = {
  name: 'moderasyon'
};