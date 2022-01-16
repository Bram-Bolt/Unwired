module.exports = {
  name: "instagram",
  description: "geeft de instagram van de server",
  execute(message, args, Discord, client, config, serverInfo){


        let embed = new Discord.MessageEmbed()
                  .setColor(config.color)
                  .setTitle('Instagram')
                  .setDescription("Volg ons network op Instagram via: `" + serverInfo.instagram + "`")
                  .setFooter("Voor meer informatie doe" + config.prefix + " links.", config.mainIcon);



        message.channel.send(embed);


  }
}
