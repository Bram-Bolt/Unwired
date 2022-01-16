module.exports = {
  name: "website",
  description: "geeft de website van de server",
  execute(message, args, Discord, client, config, serverInfo){

    let embed = new Discord.MessageEmbed()
                  .setColor(config.color)
                  .setTitle('Website')
                  .setDescription("De website van ons netwerk is: " + serverInfo.website + " !")
                  .setFooter("Voor meer informatie doe" + config.prefix + " links.", config.mainIcon);



        message.channel.send(embed);

  }
}
