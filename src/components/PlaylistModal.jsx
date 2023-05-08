import { useState,useRef } from 'react'

function PlaylistModal(props){

    const playlistName = useRef(null);
    const playlistImg = useRef(null);

    const closeModal = function () {
        props.handler(false)
    }

    return(
        <article className="playlistCreate" id="playlistCreate">

        <section className='playlistCreateWrap' id='playlistCreateWrap'>

            <form>
                <span onClick={closeModal} className="close">&times;</span>

                <aside>
                    <input type="text" name="playlistName" id="playlistName"  ref={playlistName} placeholder=" name of the playlist"/>

                    <button>
                        Create
                    </button>
                </aside>


            </form>
        </section>

        

        </article>
    );
}

export default PlaylistModal;