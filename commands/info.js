const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   var botEmbed = new discord.MessageEmbed()
        .setTitle("Een titel")
        .setDescription("Een beschrijving") 
        .setColor("#0099ff")
        .addField("Bot naam", client.user.username)
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter("Footer tekst", 'https://i.imgur.com/wSTFkRM.png');

    return message.channel.send({ embeds: [botEmbed] });    

}

module.exports.help = {
    name: "info",
    category: "info",
    description: "Geeft info aan"
}