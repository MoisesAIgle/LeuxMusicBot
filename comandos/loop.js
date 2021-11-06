const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "loop",
  alias: ["repeat"],

async execute (client, message, args){

    const serverQueue = client.distube.getQueue(message)
    
    if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz para escuchar música")

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo!")
 
    if(!serverQueue) return message.channel.send("No hay canciones en la lista")

    const opcion = args[0]
    if(!opcion) return message.channel.send("Debes escribir una opcion ( 0 / 1 / 2 )")

    if(opcion !== '0'){
        if(opcion !== '1'){
            if(opcion !== '2'){
                return message.channel.send("Esa no es una opcion valida.")
            }
        }
    }
    if(opcion === '0'){
        client.distube.setRepeatMode(message, 0)
        const embed1 = new Discord.MessageEmbed()
        .setDescription("La repetición ha sido **desactivada**")
        .setColor("RED")
        message.channel.send(embed1)
        return;
    }
    if(opcion === '1'){
        client.distube.setRepeatMode(message, 1)
        const embed2 = new Discord.MessageEmbed()
        .setDescription("Se ha desactivado la repetición de la canción **actual**.")
        .setColor("RED")
        message.channel.send(embed2)
        return;
    }
    if(opcion === '2'){
        client.distube.setRepeatMode(message, 2)
        const embed3 = new Discord.MessageEmbed()
        .setDescription("Se ha activado la repetición de la **playlist**")
        .setColor("RED")
        message.channel.send(embed3)
        return;
    }
 
 }

}