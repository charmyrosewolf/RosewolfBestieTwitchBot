var ComfyJS = require("comfy.js");
require('dotenv').config()

let users = {};

ComfyJS.onCommand = (username, command, message, flags, extra) => {
    if (command.toLowerCase() === 'hi') {
        console.log(users);

        addUser(username);

        if (users[username].greeted) {
            ComfyJS.Say(
                `Haven't we already spoken @${username}?`
            );
        } else {
            ComfyJS.Say(`hi @${username}!`);
            users[username].greeted = true;
        }


    }
}

ComfyJS.Init(process.env.TWITCH_USER_BOT, process.env.OAUTH_BOT, process.env.TWITCH_USER);

function addUser(username) {
    if (!(username in users)) {
        console.log("we should be here")
        users[username] = {}
    }
}
