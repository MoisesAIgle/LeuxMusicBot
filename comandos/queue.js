const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "queue",
  alias: [],

async execute (client, message, args){

    const serverQueue = client.distube.getQueue(message)

    if(!serverQueue) return message.channel.send("No hay canciones reproduciendose ahora mismo.")

    const embed = new Discord.MessageEmbed()
    .setAuthor( message.author.username, message.author.avatarURL())
    .setTitle("Playlist")
    .setDescription('\n' + serverQueue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter("Playlist del server")

    message.channel.send(embed)
 }

}