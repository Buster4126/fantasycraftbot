const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    try{

        var text = "**TEST BOT** \n\n **__Commands__** \n !hallo - Say to the Bot Hallo. \n !si - Get the Server informations.";

        message.author.send(text);

        message.reply("Check your Private messages");

    }catch(error) {
        message.reply("Enable private messages!");
    }

}

module.exports.help = {
    name: "help"
}