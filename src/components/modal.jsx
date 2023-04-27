import { useState, useEffect } from "react";
function Modal(props) {
    const closeModal = function () {
        props.handler(false)
    }
    const [fullDetails, setfullDetails] = useState("");

    useEffect(() => {
        const API_KEY = "k_5w96icwm";
        // const API_URL = `https://imdb-api.com/en/API/Title/${API_KEY}/${props.movieData.id}/Trailer,`;
        const API_URL = "/src/data/responseTest.json"
        fetch(API_URL)
            .then(response => response.json()).then(data =>{
               return setfullDetails(data)

            }
            )

    }, [])
    // const getDetails = function () {
    //     fetch('/src/data/Top250.json').then((data) => {
    //       return data.json()
    //     }).then(data => {setMovies(data.items); setLoading(false)});
    //   }
    console.log(fullDetails.trailer?.title)
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span onClick={closeModal} className="close">&times;</span>
                <article>
                    <figure>
                        <img className="posterDesc" src={props.movieData.image} alt={props.movieData.title} />
                        <figcaption>{props.movieData.fullTitle}</figcaption>
                        <p>{fullDetails.plot}</p>
                    </figure>
                    <aside>
                        <h2>{props.movieData.title}</h2>
                        <iframe src={`${fullDetails.trailer?.linkEmbed}?autoplay=false&width=700`} width="700" height="270" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" frameBorder="no" scrolling="no"></iframe>
                    </aside>
                </article>
                <section></section>

            </div>
        </div>


    )
}

export default Modal;