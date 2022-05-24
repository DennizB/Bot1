const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const categoryID = "930264301770518528";

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet doen");

    if (message.channel.parentId == categoryID) {

        message.channel.delete();

        var embedTicket = new discord.MessageActionRow()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription("Het ticket is gemarkeerd als **compleet**")
            .setFooter("Ticket gesloten");

        var ticketchannel = message.member.guild.channels.cache.find(channel => channel.name === "log");
        if (!ticketchannel) return message.reply("Kanaal bestaat niet");

        return ticketchannel.send({ embeds: [embedTicket] });

    } else {
        return message.channel.send("Gelieve dit commando in een ticket kanaal uit te voeren.");
    }



}

module.exports.help = {
    name: "close",
    category: "general",
    description: ""
}