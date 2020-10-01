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

	// function to kick a user using !kick
	if (msg.content.startsWith('!kick')) {
		if (msg.mentions.users.size) {
		  const taggedUser = msg.mentions.users.first();
		  msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
		} else {
		  msg.reply('Please tag a valid user!');
		}
	  }

	// Ignore the message if the message does not start with the specified prefix.
	if (message.content.indexOf(config.prefix) != 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	let commandArray = [
		"ping",
		"bada-bing",
		"creeper",
		"bruh",
		"help",
		"!kick",
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
		case "avatar":
			const member = message.mentions.members.first() || message.member;
			const embed = new MessageEmbed()
			.setColor('#00eeff')
			.setFooter(member.user.tag)
			.setURL(member.user.displayAvatarURL({ dynamic: true }))
			.setImage(member.user.displayAvatarURL({ dynamic: true, size: 4096 }));
			message.channel.send(embed);
			break;
		}
	//END OF SWITCH STATEMENT
});

// Log the bot in using the token from https://discordapp.com/developers/applications/me
client.login(config.token);
