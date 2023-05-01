class User {
    /** 
     * @var {number} id
     * @var {string} name
     * @var {string} email
     * @var {string} password
     * @var {string} genre
     * @var {array} playlists
     * @var {array} liked
     * @var {array} disliked
    */

    #id;
    #name;
    #email;
    #password;
    #genre;
    #playlists = [];
    #liked = [];
    #disliked = [];
    #picture = null;

    constructor (id,name,email,password,genre,playlists=[],liked=[],disliked=[],picture='') {
        
        this.#id = id;
        this.#name = name;
        this.#email = email;
        this.#password = password;
        this.#genre = genre;
        this.#playlists = playlists;
        this.#liked = liked;
        this.#disliked = disliked;
        this.#picture = picture;

    }

    // methods 
    getId(){
        return this.#id;
    }

    getName(){
        return this.#name;
    }

    setName(name){
        this.#name = name;
    }

    getEmail(){
        return this.#email;
    }

    setEmail(email){
        this.#email = email;
    }

    getPassword(){
        return this.#password;
    }

    setPassword(password){
        this.#password = password;
    }

    getGenre(){
        return this.#genre;
    }

    setGenre(genre){
        this.#genre = genre;
    }

    getPlaylists(){
        return this.#playlists;
    }

    setPlaylists(playlists){
        this.#playlists = playlists;
    }

    getLiked(){
        return this.#liked;
    }

    setLiked(liked){
        this.#liked = liked;
    }

    getDisliked(){
        return this.#disliked;
    }

    setDisliked(disliked){
        this.#disliked = disliked;
    }

    getPicture(){
        return this.#picture;
    }

    // setPicture(picture){
    //     this.#picture = picture;
    // }
    
}

export default User;