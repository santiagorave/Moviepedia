import { useState,useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import Playlists from '../classes/Playlist';


function PlaylistModal(props){

    // references by default are null
    const playlistName = useRef(null);
    const [show,toggleMessage] = useState(false);

    // close modal function
    const closeModal = function () {
        props.handler(false)
    }

    let {state} = useLocation();
    console.log(state.state);

    // get the current value in the input
    const InputHandler = function (e){
        // dont reload the page  
        e.preventDefault();
        let pName = playlistName.current.value;
        // put the current value as a PlaylistName (Classes)
        if(state.state.playlists.find(playlist=> playlist.playlistName.toLowerCase()== pName.toLowerCase() )){
            console.log("Ya hay una")
            toggleMessage(true);
        } else {
            let PlayList = new Playlists(pName)
            state.state.playlists.push(PlayList);
            console.log(pName);
            props.handler(false);
        }


    }

    return(
        <article className="playlistCreate" id="playlistCreate">

            <section className='playlistCreateWrap' id='playlistCreateWrap'>


                <form>
                    <span onClick={closeModal} className="close">&times;</span>

                    <aside>
                        <h4>Playlist Creation</h4>

                        <input type="text" name="playlistName" id="playlistName"  ref={playlistName} placeholder=" name of the playlist"/>
                        {show && <p style={{color:'yellow'}}> <i className="fa-solid fa-triangle-exclamation"></i> This playlist name already exists</p>}
                        <button onClick={InputHandler}>
                            Create
                        </button>
                    </aside>



                </form>
            </section>

        </article>
    );
}

export default PlaylistModal;