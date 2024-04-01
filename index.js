const { Client, GatewayIntentBits } = require('discord.js')
const dotenv = require("dotenv")
dotenv.config();
//load environments variables from .env file
const token = process.env.TOKEN
//we made a client which have three intents
const client = new Client({
    intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent],
});

client.on('messageCreate', (message) => {
    // console.log(message.content);
    // console.log(message)

    if (message.author.bot) return;
    message.reply({
        content: "Hi from bot"
    })
    if (message.content.startsWith("create")) {
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generating short ID for " + url,
        });
    }
})

//when slash command is passed in discord chat
client.on("interactionCreate", (interaction) => {
    // console.log(interaction);
    interaction.reply("Pong!");
});
client.login(token)