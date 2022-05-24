const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    // !review aantal bericht bericht bericjt

    const amountStars = args[0];

    if (!amountStars || amountStars < 1 || amountStars > 5) return message.reply("Geef een aantal sterren op tussen 1 t.e.m 5");

    const messageReview = args.splice(1, args.length).join("") || '**Geen bericht meegegeven**';

    const reviewChannel = message.member.guild.channels.cache.get("930209786207805500");

    if (!reviewChannel) return message.reply("Kanaal niet gevonden");

    var stars = "";

    for(var i = 0; i < amountStars; i++) {
        
        stars += ":star: ";

    }

    message.delete();

    const review = new discord.MessageEmbed()
        .setTitle(`${message.author.username} heeft een review geschreven! 🎉`)
        .setColor("#00ff00")
        .setThumbnail("https://i.imgur.com/wSTFkRM.png")
        .addField("Sterren:", `${stars}`)
        .addField("Review:", `${messageReview}`);

    message.channel.send("✅ Je hebt succesvol een review geschreven.");

    return reviewChannel.send({ embeds: [review] });

}

module.exports.help = {
    name: "review",
    category: "general",
    description: ""
}