import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Modal from "./modal";
function Nav(props) {
    const [allmovies, setAllMovies] = useState([]);
    const [searchWord, setWord] = useState("");
    const [searchModal,setModalSearch] = useState(false);
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
        data.current= {"id":e.target.id,"fullTitle":e.target.attributes.name.value}
        console.log(data.current)
        setWord("");
        inputRef.current.value="";
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
        {searchModal && <Modal handler={clickHandlerChild}  movieData={data.current}/>}
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
                                    <p name={el.fullTitle} id={el.id} onClick={(data)=>{
                                        searchTitleHandler(data)
                                    }} key={el.id} >{el.title}</p>
                                )
                            })
                        }
                    </article>
                </form>
                <aside >
                    <Link hidden={!props.userState.name} to="/profile">
                        <button className="profile">{props.userState.name} </button>
                    </Link>
                </aside>
                <h4 onClick={LogInHandler}>{props.userState.name ? 'Sign out' : 'Login'}</h4>
            </nav>
        </>)
}

export default Nav;