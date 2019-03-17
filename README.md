# VLC Playlist Control
Provides an easy way to (programmatically) control the playback of a VLC playlist.

## Setup
### Requisites
* VLC desktop version
* Node
### Installation
Run these commands:
```batch
git clone https://github.com/JohanWinther/vlc-playlist-control.git
cd vlc-playlist-control
npm install
```
Enable the [VLC http server](https://wiki.videolan.org/VSG:Interface:HTTP/). Remember to set a password and port number under the Lua settings.

Change the server host+port number and/or password in the `index.js` file.

## Commands
The commands need to be run in the same directory as `index.js` or be referenced with paths.
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
