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
	// Ignore the message if the author of the message is another bot.
	if (message.author.bot) return;

	// Ignore the message if the message does not start with the specified prefix.
	if (message.content.indexOf(config.prefix) != 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	let commandArray = [
		"ping",
		"bada-bing",
		"creeper",
		"bruh",
		"help"
	]
	// NUMBER OF COMMANDS: 7
	switch(command) {
		case "ping":
			message.channel.send("pong!");
			break;
		case "bada-bing":
			message.channel.send("bada-boom");
			break;
		case "creeper":
			message.channel.send("aww man");
			break;
		case "bruh":
			message.channel.send("bruh moment");
			break;
		case "hey":
			message.channel.send("hey! How can i help you ");
			break;
		case "help":
			let helpEmbed = new Discord.MessageEmbed()
			.setTitle("WackBot Commands")
			.setDescription(commandArray.join("\n"))
			.setColor("#00eeff")
			message.channel.send(helpEmbed)
			break;
		case "foo":
			message.channel.send("bar");
			break;
	}
	if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
	//END OF SWITCH STATEMENT
});

// Log the bot in using the token from https://discordapp.com/developers/applications/me
client.login(config.token);
