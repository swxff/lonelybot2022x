const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://cdn.discordapp.com/attachments/941759205977772114/942111517397098556/xddx.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Lonely Yardım Menüsüne Hoşgeldiniz :innocent:
${client.user} Kullanırken \`@Lonely\` rolünü en yukarıda tutunuz.
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**
**
📁 \`${client.ayarlar.prefix}kayıt-sistem\`

> Kayıt Sistemi, Tag rol, Koruma,
> Say, Aktiflik, Mesaj tag \`ve dahası..\`

🆙 \`${client.ayarlar.prefix}seviye-sistem\`

> Basit Seviye, Seviye sıralaması & büyük 
> depolama alan

🦋 \`${client.ayarlar.prefix}moderasyon\` Menüsüne erişebilirsiniz.

> Mute, Karantina, Ban, Toplu rol, Sayaç \`&\` Oto 
> rol, Kısıtlamalar

🔥 \`${client.ayarlar.prefix}sunucu\` Menüsüne erişebilirsiniz.

> Yasak tag, Oto isim, Komut mesaj, Fake hesap, 
> Sunucu tema, Kanal arındır \`&\` Rol arındır

🎮 \`${client.ayarlar.prefix}eğlence\` Menüsüne erişebilirsiniz.

> doldurulcak
> doldurulcak


**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/933845017167020092/942086924905086986/Aesthetic-Anime-Pfp-Background-PNG.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['y', 'help'],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};