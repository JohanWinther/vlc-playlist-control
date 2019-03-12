var config = require("./config.json");
var request = require('request');

var args = process.argv.slice(2);
let url = `http://:${config.vlc.password}@${config.vlc.server}/requests/playlist.json`;
if (args[0] === 'video') {
    let idx = args[1]-1;
    request.get({url:url, json:true}, function (e, r, p) {
        if (p && p.children[0].children[idx]) {
            request.get(`${url}?command=pl_play&id=${p.children[0].children[idx].id}`);
        }
    });
} else {
    request.get(`${url}?command=${args[0]}`);
}