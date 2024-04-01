const { Client, GatewayIntentBits } = require('discord.js')
const dotenv = require("dotenv")
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
    //our bot is not replying to it's own messages, that's why we commented below code
    // if (message.author.bot) return;
    message.reply({
        content: "Hi from bot"
    })
})

// client.on('interactionCreate',interaction =>{

// })
client.login(token)