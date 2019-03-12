var request = require('request');

const server  = "localhost:8080";
const password= "1337";

let args = process.argv.slice(2);
let url = `http://:${password}@${server}/requests/playlist.json`;
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