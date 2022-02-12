const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
module.exports = async client => {

client.on('message', message => {
    client.user.setActivity(`🛠️ | .yardım `, {
      status: "online",
      type: "WATCHING",
      url: "https://www.youtube.com/c/Swaff"
    })
})
};

  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 