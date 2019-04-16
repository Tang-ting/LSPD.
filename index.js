const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";

client.login('NTY3MTE1MDAzNTM1MTYzMzky.XLO1Zg.x6o1eiEBT0Iz33c_6i_x23KL5fw');

client.on('ready', function () {
    console.log('Bot ON')
})

client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    
    if (args[0].toLocaleLowerCase() === prefix + 'infotang-ting'){
        if (!args[0]) return message.channel.send("Veuillez donner un Prénom Nom :x:")
        let rep = ["Tang - Ting, 56 ans, Asiatique, Domicilier à Los Santos. Chef Pompier/EMS, aucun casier."
];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");


        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("BLUE")
            .addField("Résultat trouvé dans la base de donnée : 'Tang - Ting':", rep[reptaille]);
        message.channel.send(embed)
    }
})

client.on('message', message =>{
    if(message.content === "Dmd de RDV"){
        message.channel.sendMessage('Bonjour, la central du LSFD vient de nous envoyer une chose pour le Commandant : https://i.imgur.com/2A5AN43.png ');
        console.log('répond à Dmd de RDV');
    }
});