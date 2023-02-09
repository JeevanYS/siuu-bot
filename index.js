require('dotenv').config();

const {Client, GatewayIntentBits, MessageType, DMChannel, ChannelType} = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages
    ]
});

client.on('ready', () =>{
    console.log("Your Bot is now ONLINE!")
});


client.on('messageCreate', msg => {
    if(msg.author.bot)return;
        msg.reply(`You just sent ${msg.content}`);

    });

client.login(process.env.BOT_TOKEN);
