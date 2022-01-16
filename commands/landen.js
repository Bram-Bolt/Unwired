module.exports = {
  name: "landen",
  description: "geeft de landen van de server",
  execute(message, args, Discord, client, config, serverInfo){

    let embed = new Discord.MessageEmbed()
                  .setColor(config.color)
                  .setTitle('Landen')
                  .setDescription("Voor een overzicht van landen bezoek: " + serverInfo.landen + " !")
                  .setFooter("Voor meer informatie doe" + config.prefix + " !links.", config.mainIcon);



        message.channel.send(embed);

  }
}
