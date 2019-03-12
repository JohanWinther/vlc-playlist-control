# VLC Playlist Control
Provides an easy way to (programmatically) control the playback of a VLC playlist.

## Commands
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