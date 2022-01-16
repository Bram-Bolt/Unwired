module.exports = {
  name: "tiktok",
  description: "laat de vote link van de server zien",
  execute(message, args, Discord, client, config, serverInfo){

    let embed = new Discord.MessageEmbed()
                  .setColor(config.color)
                  .setTitle('TikTok link')
                  .setDescription("De TikTok link van de server is: " + serverInfo.tiktok + " !")
                  .setFooter("Voor meer informatie doe" + config.prefix + " links.", config.mainIcon);



        message.channel.send(embed);

  }
}
