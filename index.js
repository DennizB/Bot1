const { Client, Intents, Collection } = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs");

const client = new Client({ 
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS] 
});

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"));

for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

    client.commands.set(command.help.name, command);

    console.log(`De file ${command.help.name}.js is geladen`);

}

client.once("ready", () => {
    console.log(`${client.user.username} is online.`);
    client.user.setActivity("testing", { type: "PLAYING" });

    const statusOptions = [
        "Hallo",
        "Hey",
        "Sms Poll Noordbrabant Milou naar 3010",
        "Sms Poll Noordbrabant Iris naar 3010",

    ]

    let counter = 0;

    // let time = 1 * 60 * 1000; // 1 Minuut.
    let time = 5 * 1000;

    const updateStatus = () => {

        client.user.setPresence({

            status: "online",
            activities: [
                {
                    name: statusOptions[counter]
                }
            ]
        });

        if (++counter >= statusOptions.length) counter = 0;

        setTimeout(updateStatus, time);
    }
    updateStatus();

});

client.on("guildMemberAdd", member =>{

    var role = member.guild.roles.cache.get("929816365529989312");

    if (!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get("927585739837964298");

    if (!channel) return;

    channel.send(`Welkom op de server, ${member}`);


});

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    const commandData = client.commands.get(command.slice(prefix.length));

    if (!commandData) return;

    var arguments = messageArray.slice(1);

    try {

        await commandData.run(client, message, arguments);

    } catch (error) {
        console.log(error);
        await message.reply("Er was een probleem tijdens het uitvoeren van deze command.");   
    }

});

client.login(process.env/token);