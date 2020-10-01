/**
 * A ping-pong bot, whenever you send "!ping", it replies "pong!".
 */

const Discord = require("discord.js");
// Create an instance of a Discord client
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
	if (message.author.bot) return;
	let args = message.content.split("  ").slice(1);
	let command = message.content.split("  ")[0];
	command = command.slice(config.prefix.length);

	try {
		let commandFile = require(`./commands/${command}.js`);
		delete require.cache[require.resolve(`./commands/${command}.js`)];
		return commandFile.run(client, message, args);
	} catch (err) {
		console.error("Erro:" + err )
	}

});

// Log the bot in using the token from https://discordapp.com/developers/applications/me
client.login(config.token);
