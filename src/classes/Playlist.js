class Playlists {
    /** 
     * @var {number} playlistID
     * @var {img} playlistCover
     * @var {array} movies
    */

    #playlistID;
    #playlistCover = null; // playlistCover = picturePlaylist
    #movies = [];

    constructor (playlistID,playlistCover,movies) {
        this.#playlistID = playlistID;
        this.#playlistCover = playlistCover;
        this.#movies = movies;
    }

    getPlaylistID(){
        return this.#playlistID;
    }

    getPlaylistCover(){
        return this.#playlistCover;
    }

    getMovies(){
        return this.#movies;
    }

}

export default Playlists;