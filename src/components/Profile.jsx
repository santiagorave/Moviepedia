import { Link, useLocation } from "react-router-dom";
import PlaylistModal from "./PlaylistModal";

function Profile(props){

    // useLocation is a method for link as useEffect
    let {state} = useLocation();
    console.log(state)

    return (
        <>
            <nav id="ProfileNav" className="ProfileNav">
                <Link to='/'> 
                    <h4>Logo</h4> 
                </Link>
                <Link to='/'>
                    <h4>Sign out</h4>
                </Link>
            </nav>

            <figure id="ProfileFigure" className="ProfileFigure">
                <button>
                    <img src="/src/data/moviesnow.png" alt=""/>
                </button>

                <figcaption>
                    <small> Name </small>
                    <h2> Leticia </h2>
                    <small> Email </small>
                    <h2>le@gmail.com</h2>
                    <small> Favorite Genre </small>
                    <h2>Romance</h2>
                </figcaption>
            </figure>

            <aside id="newPlaylist" className="newPlaylist">
                <h2> Create a Playlist</h2>
                <button onClick={<PlaylistModal/>} > + </button>
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