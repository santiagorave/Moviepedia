class Movie {
    /** 
     * @var {number} movieID
     * @var {string} movieName
     * @var {string} movieGenre
     * @var {string} description
     * @var {string} platform
     * @var {array} cast
     * @var {string} trailerLink
    */

    movieID;
    movieName;
    // #movieGenre;
    // #description;
    // #platform;
    // #cast = [];
    // #trailerLink;
    // #poster = null;

    constructor (movieID,movieName) {

        this.movieID = movieID;
        this.movieName = movieName;
        // this.#movieGenre = movieGenre;
        // this.#description = description;
        // this.#platform = platform;
        // this.#cast = cast;
        // this.#trailerLink = trailerLink;
        // this.#poster = poster;

    }

    // methods
    getMovieID(){
        return this.movieID;
    }

    getMovieName(){
        return this.movieName;
    }





}

export default Movie;