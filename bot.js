var Discord = require('discord.js'),
    helper = require('./helper.js'),
    express = require('express'),
    static = require('node-static');

var fileServer = new static.Server('./');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(process.env.PORT);

var app = express()

// Initialize Discord Bot
var bot = new Discord.Client()

bot.on('ready', () => {
    bot.user.setActivity(process.env.RAGSERVER, {
        type: 'PLAYING'
    });
});

bot.on('message', msg => {
    helper.command(msg)
})

bot.login(process.env.TOKEN)


app.listen(process.env.PORT || 3000, "0.0.0.0", function () {
    console.log("Listening on Port 3000");
});