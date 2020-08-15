const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    return message.channel.send("I am using this account: Support");

}

module.exports.help = {
    name: "heroku"
}