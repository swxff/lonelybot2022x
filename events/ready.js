const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const rabel = require('../gweep/rabel.json');
var prefix = rabel.prefix;

module.exports = async client => {

    client.user.setActivity(``, { type: "Lonely PLAYING" });
  client.user.setStatus("online");
  console.log("Aktif!")
};

  //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 