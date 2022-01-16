module.exports = {
  name: "shop",
  description: "geeft de shop van de server",
  execute(message, args, Discord, client, config, serverInfo){

    let embed = new Discord.MessageEmbed()
                  .setColor(config.color)
                  .setTitle('Server Shop')
                  .setDescription("De shop van ons netwerk is: " + serverInfo.shop + " !")
                  .setFooter("Voor meer informatie doe" + config.prefix + " links.", config.mainIcon);



        message.channel.send(embed);

  }
}
