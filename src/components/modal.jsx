import { useState, useEffect } from "react";
import LoadingSpinner from "./Spinner";
function Modal(props) {
    const closeModal = function () {
        props.handler(false)
    }
    const [fullDetails, setfullDetails] = useState({});
    const [platforms, setPlatforms] = useState([]);
    const [isLoading, setLoading] = useState(true);

    console.log("render");
    useEffect(() => {
        const API_KEY = "k_5w96icwm";
        // const API_URL = `https://imdb-api.com/en/API/Title/${API_KEY}/${props.movieData.id}/Trailer,`;
        const API_URL = "/src/data/responseTest.json";
        const PLATFORM_DUMMY = "/src/data/responsePlat.json";
        fetch(API_URL)
            .then(response => response.json()).then(data => {
                setLoading(false)
                return setfullDetails(data)

            }
            )
        fetch(PLATFORM_DUMMY)
            .then(response => response.json()).then(data => {
                setLoading(false)
                return setPlatforms(data)

            }
            )

    }, [])
    let counter=0;
    return (
        <>
            <div id="myModal" className="modal">
                <div className="modal-content">

                    {(isLoading) ? <LoadingSpinner /> : (
                        <div>
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
                            <div className="secondContainer">
                                <section className="platforms">
                                    { platforms.filter(platform => platform.type=="sub").map(plat=> {
                                   return <p key={counter++}>{plat.name}</p>
                                    })}
                                </section>
                                <section className="actors">
                                    {fullDetails.actorList.slice(0, 5).map(actor =>

                                        <figure key={actor.id}>
                                            <img src={actor.image} alt={actor.name} />
                                            <figcaption>
                                                <p >{actor.name}</p>
                                            </figcaption>
                                        </figure>
                                    )
                                    }
                                </section>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>

    )
}

export default Modal;