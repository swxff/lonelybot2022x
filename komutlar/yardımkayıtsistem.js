const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://cdn.discordapp.com/attachments/941759205977772114/942118845143973968/standard_4.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`**Kayıt Menüsüne Hoş Geldiniz :innocent:
${client.user} Kullanırken \`@Lonely\` rolünü en yukarıda tutunuz.**
**
🐝 \`${client.ayarlar.prefix}diğer\`
Gerekli olabilecek komutlar

💸 \`${client.ayarlar.prefix}kutusuz-mesaj-yönet\`
Kendinize özgün kutusuz normal olarak karşılama mesajı & hareketli GIF ayarlarsınız [ Ücretlidir. ]

💸 \`${client.ayarlar.prefix}kutulu-mesaj-yönet\`
Kendinize özgün Kutu içerğinde karşılama mesajı & hareketli GIF ayarlarsınız [ Ücretlidir. ]

📋 \`${client.ayarlar.prefix}kayıt-mesaj\`
Kayıt kanalında ki üyeleri karşılayan sistem

👌 \`${client.ayarlar.prefix}sunucu-kayıt\`
İsimli ve etiket ile (Erkek - Kadın) kayıt sistem

✍️ \`${client.ayarlar.prefix}mesaj-tag\`
Tag ayarlamak için kullanımı basit sistem

🍃 \`${client.ayarlar.prefix}tagrol-sistem\`
Sunucunuz da tag ve ya emoji tarzı kullananlar için stabil sistem**

**🦋 \`${client.ayarlar.prefix}isim\`**
İsmin başına birşey ekletmek için **l!isim-tag** kullanabilirsin. Etiketlediğiniz **üyenin ismini** değişirsiniz

**🍏 \`${client.ayarlar.prefix}say\`**
Sunucu içerisinde ki **toplam üye**, **taglı üye**, **aktif üye**, **erkek üye**, **kadın üye** ve **Nitro boost** seviyenizi gösterir. **${client.ayarlar.prefix}mesaj-tag** ve **${client.ayarlar.prefix}sunucu-kayıt** sistemlerini aktif edin

**🎐 \`${client.ayarlar.prefix}aktiflik aç\` & \`${client.ayarlar.prefix}aktiflik kapat\`**
Aktiflik Sistem **(c!profile & c!profile [@etiket]**) **- ne kadar kayıt etmiş bilgilerini görebilirsin**

**🌟 \`${client.ayarlar.prefix}koruma aç\` & \`${client.ayarlar.prefix}koruma kapat\`**
Aktif Koruma Sistem **7 Adet Sunucunuz için koruma sistem aktif edersin**
`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage(images.random()))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-sistem'
};