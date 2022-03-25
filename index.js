// Load token from .env file
require("dotenv").config();
// Import necessary Discord.js classes
const { Client, Intents } = require("discord.js");
// Instantiate new client object with desired Intents
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
// Authenticate
client.login(process.env.DISCORD_TOKEN);
// Notify successful connection via console
client.on("ready", function (e) {
  console.log(`Logged in as ${client.user.tag}!`);
});
// Wait for message events, check content for match,
// respond cordially to user via reply.
client.on("message", function (msg) {
  console.log(msg);
  if (msg.content === "Hello alphabot!") {
    msg.reply("Howdy!");
  }
});
