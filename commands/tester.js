module.exports = {
  name: "tester",
  description: "geeft de website van de server",
  async execute(message, args, Discord, client, config, serverInfo, fetch){


 var x = "goed"
  const response10 = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args[0]}`);
  const spelerInfo = await response10.json().catch((err) => {
           message.channel.send(`${args[0]} is geen geldige minecraftnaam! Let op: laat namen met streepjes _schuingedrukt_!`)
            x = "fout"
      });
  if(x == "fout") return;

  const response11 = await fetch(`https://api.mojang.com/user/profiles/${spelerInfo.id}/names`);
  const data11 = await response11.json();

  const hist = data11.reverse();
  var pNames = ""

  hist.forEach(element => {
          var pName = element.name.replaceAll("_","\\_");
           pNames = pNames + "\n"+ pName
        })



      let embed = {
        "title": `Minecraft informatie over ${spelerInfo.name.replaceAll("_","\\_")}` ,
        "color": "#ffc603",
        "footer": {
          "icon_url": "https://i.imgur.com/cYtNPbX.png",
          "text": "PPPPP"
        },
        "thumbnail": {
          "url": `https://visage.surgeplay.com/full/${spelerInfo.id}?tilt=0`
        },
        "fields": [
          {
            "name": "Speelt:",
            "value": "Domino-Plaza"

          },
          {
            "name": "UUID:",
            "value": `${spelerInfo.id}`
          },

          {
            "name": "Name-History:",
            "value": pNames

          }
        ]
      };


          console.log({ embed });
}
}
