const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "ping",
    description: "Gets bot latency to discord servers",
    execute(message) {
        message.channel.send(lang.pinging).then(m =>{
            var ping = (m.createdTimestamp - message.createdTimestamp) / 2;
            var a = new MessageEmbed()
                .setTitle("Ping: " + ping)
                .setColor("RANDOM");
            return message.channel.send(a);
        });
    }
}