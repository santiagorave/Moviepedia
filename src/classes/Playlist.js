class Playlists {
    /** 
     * @var {number} playlistID
     * @var {array} movies
    */

    playlistName;
    movies = [];

    constructor (playlistName,movies=[]) {
        this.playlistName = playlistName;
        this.movies = movies;
    }

    getPlaylistID(){
        return this.playlistName;
    }

    getMovies(){
        return this.movies;
    }

}

export default Playlists;