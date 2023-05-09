import { useState,useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import Movie from '../classes/Movie';


function AddPlaylist (props){
    const selectRef = useRef(null);
    // close modal function
    const closeModal = function () {
        props.handler(false)
    }
    const addMovie = function(e) { 
        e.preventDefault()
        console.log(selectRef.current.value);
        // state.state.playlists.forEach(element => {
        //     if(element.playlistName==selectRef.current.value){
        // // debugger;
        //         let movieSelected = new Movie(props.movieData.id,props.movieData.fullTitle);
        //         state.state.playlist.movies.push(movieSelected)
        //     }
        // });
        for(let i=0;i< state.state.playlists.length;i++) {
            if(state.state.playlists[i].playlistName==selectRef.current.value){
                let movieSelected = new Movie(props.movieData.id,props.movieData.fullTitle);
                state.state.playlists[i].movies.push(movieSelected)
    console.log(state.state);
                
            }
        }
        
    }

    let {state} = useLocation();
    // console.log(state.state);

    return(
        <article className="AddPlaylist" id="AddPlaylist">

            <section className='AddPlaylistWrap' id='AddPlaylistWrap'>


                <form>
                    <span onClick={closeModal} className="close">&times;</span>

                    {/* consition if state.state.playlists is not an empty array ... else "You do not have any playlist. Go to your profile and create one" */}
                    { state.state.playlists.length!=0 ? <aside>
                        <h4>Choose a playlist to add this movie</h4>

                        <select ref={selectRef} name="playlistsAdd" id="playlistsAdd">
                                
                            {state.state.playlists.map(list => 
                                <option key={list.playlistName} value={list.playlistName} >
                                {list.playlistName}
                                </option>
                            )}
                        </select>
                    
                        <button onClick={addMovie}>
                            Add
                        </button>
                    </aside> : "You do not have any playlist. Go to your profile and create one"}



                </form>
            </section>

    </article>
    );
}
export default AddPlaylist;