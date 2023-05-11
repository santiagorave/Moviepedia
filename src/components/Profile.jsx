import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PlaylistModal from "./PlaylistModal";
import ProfilePicModal from "./ProfilePicModal";
import Playlist from "./PlaylistComponent";
import Like from "./LikeComponent";

function Profile(props){
    const [playlistModal,setPModal] = useState(false);
    const [userPic,setUserPic] = useState(false);


    function handleClick() {
        setPModal(true)
    }

    function userPicModal (){
        setUserPic(true)
    }

    function closeClick (status) {
        setUserPic(status)
    }

    function clickClose(status) {
        setPModal(status)
    }


    // useLocation is a method for link as useEffect
    let {state} = useLocation();
    console.log(state.state);

    
    
    return (
        <>
            <nav id="ProfileNav" className="ProfileNav">
                <Link className="ProfileNav-Link"state={{state:state.state,users:state.users}} to='/' > 
                    <img src="/src/data/LogoMP.png" alt="mainlogo-02"/>
                </Link>
            </nav>

            {playlistModal && <PlaylistModal handler={clickClose}/>}

            {userPic && <ProfilePicModal userPicture={state.state} handler={closeClick}/>}

            <figure id="ProfileFigure" className="ProfileFigure">
                <button onClick={userPicModal}>
                    <img src={state.state.picture? state.state.picture : '/src/data/profile-default.png' } alt=""/>
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
                <button onClick={handleClick}> + </button>
            </aside>

            <section id="userLiked" className="userLiked">
                <section className='movieContainer'>
                    <h2> You've liked so far</h2>
                    <div className="playlist">
                        {state.state.liked.length!=0 ?state.state.liked.map(like=> {
                        return <Like key={like.id} movieData={like}/>
                        }): (
                            <p>You dont have likes yet<i style={{color:'yellow'}} className="fa-solid fa-face-frown"></i> </p>
                        )}
                    </div>
                </section>
            </section>

            <section id="profilePlaylists" className="profilePlaylists">
                <section id="PlaylistsWrap" className="PlaylistsWrap">

                    <h2>Playlists</h2>
                    {state.state.playlists.length!=0 ?state.state.playlists.map(playlist=> {
                    return <Playlist key={playlist.playlistName} movieData={playlist.movies} listName={playlist.playlistName}/>
                    }): (
                        <p>You dont have any playlist <i style={{color:'yellow'}} className="fa-solid fa-face-frown"></i> </p>
                    )}
                </section>
            </section>
        </>
    );
    
    
}

export default Profile;