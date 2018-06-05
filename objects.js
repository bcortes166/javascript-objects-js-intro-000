const playlist = {Nickelback : 'Photograph'};

function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign({}, playlist, {[artistName]:songTitle})
}

function removeFromPlaylist(playlist, artistName) {


}
