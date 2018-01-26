var heroku = require("heroku-ping");
 
heroku.ping({
  silent: false,       // logging (default: false) 
  apps: [{
    name: 'ragnarok-discord-bot', // heroku app name - required
    secure: true      // requires https (defaults: false)
  },{
    name: 'pingme'
  }]
})