const Discord = require("discord.js");
const client = new Discord.Client();
const {prefix, token} = require("./config.json");


client.once("ready", () => {
    console.log("Ready!");
});


client.login("------------------------------------");

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    let move = message.content.slice(prefix.length).trim().split(' ');
    let character = move.shift().toLowerCase();
    const validCharacters = ["dr._mario", "mario", "luigi", "bowser", "peach", "yoshi", "donkey_kong", "captain_falcon", "ganondorf", "falco", "fox", "ness", "ice_climbers", "kirby", "samus", "zelda", "link", "young_link", "pichu", "pikachu", "jigglypuff", "mewtwo", "mr._game_and_watch", "marth", "roy"]    
    const validMoves = ["jab1", "jab2", "jab3", "utilt", "dtilt", "ftilt", "dattack", "fsmash", "usmash", "dsmash", "nair", "fair", "bair", "uair", "dair", "neutralb", "sideb", "upb", "downb", "grab", "dgrab", "sdodge", "broll", "froll", "adodge"]
    move = String(move);

    if (character === "help") {
        return message.channel.send("!characters for a list of character inputs\n!moves for a list of moves\n Format: !(character) (move)");
    }
    if (character === "characters") {
        return message.channel.send(validCharacters);
    }
    if (character === "moves") {
        return message.channel.send(validMoves);
    }
    if (character === "doc") {
        character = "dr._mario";
    }
    if (validCharacters.includes(character) && validMoves.includes(move)) {
        return message.channel.send("http://meleeframedata.com/static/gifs/" + character + "/" + move + ".gif");
    }
    
    
})
