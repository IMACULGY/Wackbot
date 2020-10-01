const Discord = require("discord.js");

module.exports.run = async (client, message,args ) => {
    const member = message.mentions.members.first() || message.member;
			const embed = new MessageEmbed()
			.setColor('#00eeff')
			.setFooter(member.user.tag)
			.setURL(member.user.displayAvatarURL({ dynamic: true }))
			.setImage(member.user.displayAvatarURL({ dynamic: true, size: 4096 }));
			message.channel.send(embed);
}