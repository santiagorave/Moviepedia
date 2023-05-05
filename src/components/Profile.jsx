import { Link, useLocation } from "react-router-dom";
import PlaylistModal from "./PlaylistModal";

function Profile(props){

    // useLocation is a method for link as useEffect
    let {state} = useLocation();
    console.log(state.state);

    return (
        <>
            <nav id="ProfileNav" className="ProfileNav">
                <Link state={{state:state.state}} to='/' > 
                    <h4>Logo</h4> 
                </Link>
                <Link  to='/'>
                    <h4>Sign out</h4>
                </Link>
            </nav>

            <figure id="ProfileFigure" className="ProfileFigure">
                <button>
                    <img src="/src/data/moviesnow.png" alt=""/>
                </button>

                <figcaption>
                    <small> Username </small>
                    <h2> {state.state.name} </h2>
                    <small> Email</small>
                    <h2>{state.state.email} </h2>
                    <small> Favorite Genre </small>
                    <h2>{state.state.genre}</h2>
                </figcaption>
            </figure>

            <aside id="newPlaylist" className="newPlaylist">
                <h2> Create a Playlist</h2>
                <button> + </button>
            </aside>

            <section id="userLiked" className="userLiked">
                <h2> You've liked so far</h2>
                <article>

                </article>
            </section>

            <section id="profilePlaylists" className="profilePlaylists">

            </section>
        </>
    );

}

export default Profile;