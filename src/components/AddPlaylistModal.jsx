import { useState,useRef } from 'react';
import { Link, useLocation } from "react-router-dom";

function AddPlaylist (props){

    // close modal function
    const closeModal = function () {
        props.handler(false)
    }

    let {state} = useLocation();
    console.log(state.state);

    return(
        <article className="AddPlaylist" id="AddPlaylist">

            <section className='AddPlaylistWrap' id='AddPlaylistWrap'>


                <form>
                    <span onClick={closeModal} className="close">&times;</span>

                    {/* consition if state.state.playlists is not an empty array ... else "You do not have any playlist. Go to your profile and create one" */}
                    { state.state.playlists!=[] ? <aside>
                        <h4>Choose a playlist to add this movie</h4>

                        <select name="playlistsAdd" id="playlistsAdd">
                                
                            {state.state.playlists.map(list => 
                                <option key={list.playlistName} value={list.playlistName} >
                                {list.playlistName}
                                </option>
                            )}
                        </select>
                    
                        <button>
                            Add
                        </button>
                    </aside> : "You do not have any playlist. Go to your profile and create one"}



                </form>
            </section>

    </article>
    );
}
export default AddPlaylist;