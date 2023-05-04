import { useRef } from "react";

function PlaylistModal(props){
    return(
        <article className="playlistCreate" id="playlistCreate">

            <form action="POST">
                <input type="image" src="" alt="playlistName" />

                <input type="text" name="playlistName" id="playlistName"/>

                <article>
                    <button type="submit">
                        Create
                    </button>
                </article>
            </form>

        </article>
    );
}

export default PlaylistModal;