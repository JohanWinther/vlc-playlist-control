# VLC Playlist Control
Provides an easy way to (programmatically) control the playback of a VLC playlist.

## Setup
### Requisites
* VLC desktop version
* Node
### Installation
```batch
git clone https://github.com/JohanWinther/vlc-playlist-control.git
cd vlc-playlist-control
npm install
```
Now you need to enable the [VLC http server](https://wiki.videolan.org/VSG:Interface:HTTP/). Remember to set a password under the Lua settings. Now change the server and/or password in the `index.js` file.

## Commands
The commands need to be run in the same directory as `index.js` or be referenced full paths.
### Start video number N in opened playlist
```batch
node index.js video N
```
where `N` is the video number.
### Run custom command
```batch
node index.js command
```
where `command` is a supported VLC http command. Further reference can be found [here](https://wiki.videolan.org/VLC_HTTP_requests/).
