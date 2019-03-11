const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("554762765642891271")
setInterval(function() {
channel.send(`NAR FOR EVER  `);
}, 30)
})

client.login(process.env.BOT_TOKEN);