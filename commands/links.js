module.exports = {
  name: "links",
  description: "geeft alle links van de server",
  execute(message, args, Discord, client, config, serverInfo){

    let embed = new Discord.MessageEmbed()
                  .setColor(config.color)
                  .setTitle('Server Informatie!')
                  .setThumbnail(config.linksIcon)
                  .setDescription("**IP:** `" + serverInfo.ip + "`\n **Dynmap:** " + serverInfo.dynmap + "\n **Instagram:** `" + serverInfo.instagram  + "`\n **Website:** " + serverInfo.website + "\n **Discord:** " + serverInfo.discord + "\n **Shop:** " + serverInfo.shop + "\n **Landen Overzicht:** " + serverInfo.landen + "\n **TikTok Link:** " + serverInfo.tiktok)
                  .setFooter("Voor verdere informatie maak gerust een ticket aan!", config.mainIcon);



        message.channel.send(embed);

  }
}
