const Discord = require("discord.js");
const { type } = require("os");
const client = new Discord.Client();
const fs = require('fs');
require('dotenv').config();

let prefix = 'mc!'

//////////////////////////handler///////////////////////////
let { readdirSync } = require('fs')

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require (`./comandos/${file}`);
    client.commands.set(command.name, command);
}

////////////////////estados///////////////////////////////

/////////////////////////client.on///////////////////////

 client.on("message", async message => {
     let prefix = 'mc!'

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
        message.channel.send("Hola! soy Leux MusicBot y mi prefix es mc!, para saber mas de mi usa `mc!help`.")
    }

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
    cmd.execute(client, message, args)
}
});
//////////////////////handler////////////////////


const estados = [
    `mc!help`,
    `Minecraft`,
    `esohack`,
    `Leux Owns You And All`,
    `Moises is my father`,
    `Galactic Is My Mother`,
    `Luscius loves me :3`,
    `Light + Obby = <33`,
    `Me gustan los gatos`,
    `LeuxBackdoor`,
    `Fue Gari 😔`,
    `Skill Issue`,
    `Viva España`,
    `Neo EGapps Yummi`,
    `Arriba Perú :D`,
    ]
client.on('ready', async (dou) => {

    setInterval(() => {
        function presence() {
            client.user.setPresence({
                status: 'online',
                activity: {
                    name: estados[Math.floor(Math.random() * estados.length)],
                    type: 'PLAYING',
            }
            })
        }
        presence()
    }, 5000);

    console.log('Estados listos!')
})
 //////////Distube//////////// 
 
 const Distube = require("distube");
 client.distube = new Distube(client, {
     emitNewSongOnly: true,
     searchSongs: false,
     leaveOnStop: true,
     leaveOnFinish: true,
     leaveOnEmpty: true
 });


 client.distube.on("addList", (message, queue, playlist) => {
     const embedaddlist = new Discord.MessageEmbed()
     .setDescription(`Playlist:\n**${playlist.name}** ***${message.author}***`)
     .setColor("RED")
     message.channel.send(embedaddlist)})

 client.distube.on("addSong", (message, queue, song) => {
    const embedaddsong = new Discord.MessageEmbed()
    .setDescription(`Añadido a la cola, **${song.name}** - **${song.formattedDuration}** ***${message.author}***`)
    .setColor("RED")
     message.channel.send(embedaddsong)})

 client.distube.on("playSong", (message, queue, playsong) =>{
    const embedplaysong = new Discord.MessageEmbed()
    .setDescription(`Reproduciendo ahora: **${playsong.name}** - **${playsong.formattedDuration}** ***${message.author}***`)
    .setColor("RED")
message.channel.send(embedplaysong)})

 client.distube.on("playList",(message, queue, playsong) => {
    const embedplaylist = new Discord.MessageEmbed()
    .setDescription(`Reproduciendo playlist: **${playlist.name}**`)
    .setColor("RED")
    message.channel.send(embedplaylist)})

 client.distube.on("initQueue", (queue) => {
     queue.autoplay = false;
     queue.volume = 100
 })

///////////////Distube//////////////////
 
 client.login("Tu token");