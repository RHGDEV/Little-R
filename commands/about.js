const discord = require('discord.js'),
pak = require("../package.json"),
config = require("../config.json");

module.exports.run = (bot, message, args) => {
  let embed = new discord.RichEmbed()
    .setTimestamp()
    .setAuthor(`${bot.user.username} About`)
    .setFooter(bot.user.username, bot.user.avatarURL)
    .setColor("7289DA")
    .addField(`Version`, `${pak.version}`, true)
    .addField(`Library`, `discord.js`, true)
    .addField(`Creator`, `${pak.author}`, true)
    .addField(`Servers`, `${bot.guilds.array().length}`, true)
    .addField(`Users`, `${bot.users.array().length}`, true)
    .addField(`Channels`, `${bot.channels.array().length}`, true)
    .addField(`Invite`, `[Invite Page](${config.social.Website}invite)`, true)
    .addField(`Support`, `[Patreon](${config.social.Patreon})`, true);
    
  message.channel.send({ embed }).then(m => m.delete(35000));
};

module.exports.help = {
  name: "about",
  usage: ``,
  information: "I'll tell you some information on me!"
};

module.exports.settings = {
  permission: "All",
  deleteresponder: true,
  category: "Info"
};