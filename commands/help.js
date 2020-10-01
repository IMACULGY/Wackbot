const Discord = require("discord.js");

module.exports.run = async (client, message,args ) => {

    let  commandArray  =  [
		"ping" ,
		"bada-bing" ,
		"trepadeira" ,
		"bruh" ,
		"Socorro"
	]


    let helpEmbed = new Discord.MessageEmbed()
    .setTitle("WackBot Commands")
    .setDescription(commandArray.join("\n"))
    .setColor("#00eeff")
    message.channel.send(helpEmbed)
}