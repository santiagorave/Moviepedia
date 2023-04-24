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

    #movieID;
    #movieName;
    #movieGenre;
    #description;
    #platform;
    #cast = [];
    #trailerLink;
    #poster = null;

    constructor (movieID,movieName,movieGenre,description,platform,cast,trailerLink,poster) {

        this.#movieID = movieID;
        this.#movieName = movieName;
        this.#movieGenre = movieGenre;
        this.#description = description;
        this.#platform = platform;
        this.#cast = cast;
        this.#trailerLink = trailerLink;
        this.#poster = poster;

    }

    // methods
    getMovieID(){
        return this.#movieID;
    }

    getMovieName(){
        return this.#movieName;
    }

    setMovieName(movieName){
        this.#movieName = movieName;
    }

    getMovieGenre(){
        return this.#movieGenre;
    }

    setMovieGenre(movieGenre){
        this.#movieGenre = movieGenre;
    }

    getDescription(){
        return this.#description;
    }

    setDescription(description){
        this.#description = description;
    }

    getPlatform(){
        return this.#platform;
    }

    setPlatform(platform){
        this.#platform = platform;
    }

    getCast(){
        return this.#cast;
    }

    setCast(cast){
        this.#cast = cast;
    }

    getTrailer(){
        return this.#trailerLink;
    }

    setTrailer(trailerLink){
        this.#trailerLink = trailerLink;
    }

    getPoster(){
        return this.#poster;
    }

    setPoster(poster){
        this.#poster = poster;
    }
}

export default Movie;