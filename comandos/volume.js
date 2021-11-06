const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "volume",
  alias: ["volumen"],

async execute (client, message, args){

    const serverQueue = client.distube.getQueue(message)
    
    if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz para escuchar música")

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo!")
 
    if(!serverQueue) return message.channel.send("No hay canciones en la lista")

    const volume = args[0]
    if(!volume) return message.channel.send("Debes decir un volumen")
    if(!isNaN) return message.channel.send("Debes decir un número.")

    if(volume < 1) return message.channel.send("El numero debe ser mayor a 0!")
    if(volume > 100) return message.channel.send("El numero debe ser menor de 100!")

    client.distube.setVolume(message, volume)
    
    const embed = new Discord.MessageEmbed()
    .setDescription(`El volumen se ha establecido a **${volume}%**`)
    .setColor("RED")
    message.channel.send(embed)

 
 }

}