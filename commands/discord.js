module.exports = {
  name: "discord",
  description: "geeft de officieële discord van de server",
  execute(message, args, Discord, client, config, serverInfo){


        let embed = new Discord.MessageEmbed()
                      .setColor(config.color)
                      .setTitle('Discord Link')
                      .setDescription("De officieële discord link is: " + serverInfo.discord + " !")
                      .setFooter("Voor meer informatie doe" + config.prefix + " links.", config.mainIcon);



            message.channel.send(embed);

  }
}
