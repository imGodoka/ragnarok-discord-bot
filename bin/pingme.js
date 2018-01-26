const https = require("https");

const url =
  "https://ragnarok-discord-bot.herokuapp.com/";

https.get(url, res => {
  res.on("data", data => {
    console.log('Pinguei!')
  });
});