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

    id;
    title;
    image;
    year;
    imDbRating;
    // #movieGenre;
    // #description;
    // #platform;
    // #cast = [];
    // #trailerLink;
    // #poster = null;

    constructor (id,title,image,year,imDbRating) {

        this.id = id;
        this.title = title;
        this.image = image;
        this.year = year;
        this.imDbRating = imDbRating;
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
    getMovieImage(){
        return this.movieImage;
    }
    getMovieYear(){
        return this.movieYear;
    }
    getMovieRating(){
        return this.movieRating;
    }





}

export default Movie;