const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "stop",
  alias: [],

async execute (client, message, args){

    const serverQueue = client.distube.getQueue(message)
    
    if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz para escuchar música")

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo!")
 
    if(!serverQueue) return message.channel.send("No hay canciones en la lista")

    client.distube.stop(message)
    
    message.channel.send("La musica fue detenida correctamente!")
 
 }

}