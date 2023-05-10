import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Modal from "./modal";
import Movie from "../classes/Movie";
function Nav(props) {
    const [allmovies, setAllMovies] = useState([]);
    const [searchWord, setWord] = useState("");
    const [searchModal, setModalSearch] = useState(false);
    const data = useRef({});
    const inputRef = useRef(null);


    function LogInHandler() {
        if (props.userState.name) {
            props.userMethod({});
        } else {
            props.modalLoginState(true);
        }
    }
    const getElements = function () {
        fetch("src/data/Alldata.json").then(data => data.json()).then(movies => setAllMovies(movies));
    }
    useEffect(() => {
        getElements()

    }, [])

    const clickHandler = function (e) {
        e.preventDefault();
        console.log()
    }
    const inputHandler = function (e) {
        setWord(e.target.value);

    }
    const clickHandlerChild = function (data) {
        setModalSearch(data);
    }
    const searchTitleHandler = function (e) {
        // data.current = { "id": e.target.id, "fullTitle": e.target.attributes.name.value }
        let rating = e.target.attributes?.rating?.value ? e.target.attributes.rating.value : 'Not rated yet';
        data.current = new Movie(e.target.id,e.target.attributes.name.value,e.target.attributes.image.value,e.target.attributes.year.value,rating)
        console.log(data.current)
        setWord("");
        inputRef.current.value = "";
        setModalSearch(true)

    }


    //   console.log(allmovies.map(item => item.id))

    // console.log(allmovies.filter((movie) => movie.name?.toLowerCase().includes("incep")))
    // console.log(allmovies.filter(el=>el?.title.toLowerCase().includes("wick")).slice(0,3))
    // console.log()
    // const  idSet = new Set();
    // const hasDuplicate = allmovies.filter(element =>idSet.size === idSet.add(element.id).size);
    // console.log(hasDuplicate);


    return (
        <>
            {searchModal && <Modal user={props.userState} handler={clickHandlerChild} movieData={data.current} />}
            <nav>
                <h1> Logo </h1>

                <form action="#">
                    <section>
                        <input ref={inputRef} onChange={inputHandler} autoComplete="off" type="text" placeholder="" name="search"></input>
                        <button type="click" id="searchBtn" onClick={clickHandler}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </section>
                    <article className="searchBox">
                        {searchWord == "" ? null :
                            allmovies.filter(el => el?.title.toLowerCase().includes(searchWord.toLowerCase())).slice(0, 5).map(el => {
                                return (
                                    <p name={el.fullTitle} image={el.image} rating={el.imDbRating} id={el.id} year={el.year} onClick={(data) => {
                                        searchTitleHandler(data)
                                    }} key={el.id} >{el.title}</p>
                                )
                            })
                        }
                    </article>
                </form>
                <aside >
                    <Link hidden={!props.userState.name} state={{ state: props.userState, users: props.allUsers }} to="/profile">
                        <button className="profile">{props.userState.name} </button>
                    </Link>
                </aside>
                <h4 onClick={LogInHandler}>{props.userState.name ? 'Sign out' : 'Login'}</h4>
            </nav>
        </>)

}

export default Nav;