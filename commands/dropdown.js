const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const options = [
        {
            label: "Kijker",
            value: "929816365529989312"
        },
        {
            label: "Kijker",
            value: "929816365529989312"
        }
    ];

    const row = new discord.MessageActionRow()
        .addComponents(
            new discord.MessageSelectMenu()
                .setCustomId("roles")
                .setMinValues(0)
                .setMaxValues(2)
                .setPlaceholder("Selecteer een rol")
                .addOptions(options)
        );

    return message.channel.send({ content: "Selecteer hier je rol", Components: [row] });

}

module.exports.help = {
    name: "dropdown",
    category: "general",
    description: ""
}