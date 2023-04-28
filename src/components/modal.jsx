import { useState, useEffect } from "react";
import LoadingSpinner from "./Spinner";
function Modal(props) {
    const closeModal = function () {
        props.handler(false)
    }
    const [fullDetails, setfullDetails] = useState({});
    const [platforms, setPlatforms] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [platformIcons,setIcons] = useState({
        "HBO MAX":"/src/data/square social logo 400 x 400_0.webp",
        "Netflix":"/src/data/Netflix_2015_logo.svg",
        "Hulu": "/src/data/Hulu_logo_(2014).svg",
        "Amazon Prime":"/src/data/Amazon_Prime_Video_logo.svg",
        "Disney+":"/src/data/Disney+_logo.svg",
        "AppleTV+":"/src/data/Apple_TV_Plus_Logo.svg",
        "Hayu":"/src/data/Hayu_Logo_Coral_svg.svg",
        "Paramount+":"/src/data/Paramount+_logo.svg",
        "Showtime": "/src/data/Showtime.svg",
        "Crave":"/src/data/Crave_2018_logo.svg"
    });

    useEffect(() => {
        const API_KEY = "k_5w96icwm";
        const API_KEY_PLATFORM="d85kYSxRrSvSdKsv9deB4tPyy6NJ7Damby0TAmMA"
        // const API_URL = `https://imdb-api.com/en/API/Title/${API_KEY}/${props.movieData.id}/Trailer,FullCast,`;
        const API_URL = "/src/data/responseTest.json";
        const PLATFORM_DUMMY = "/src/data/responsePlat.json";
        // const API_PLATFORM=`https://api.watchmode.com/v1/title/${props.movieData.id}/sources/?apiKey=${API_KEY_PLATFORM}&regions=US`
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
    return (
        <>
            <div id="myModal" className="modal">
                <div className="modal-content">

                    {(isLoading) ? <LoadingSpinner /> : (
                        <div>
                            <span onClick={closeModal} className="close">&times;</span>
                            <article>
                                <figure className="posterFigure">
                                    <img className="posterDesc" src={props.movieData.image} alt={props.movieData.title} />
                                    <figcaption>{props.movieData.fullTitle}</figcaption>
                                    <p>{fullDetails.plot}</p>
                                </figure>
                                <aside>
                                    <h2>{props.movieData.title}</h2>
                                    <iframe src={`${fullDetails.trailer?.linkEmbed}?autoplay=false&width=480`} width="480" height="270" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" frameBorder="no" scrolling="no"></iframe>
                                </aside>
                            </article>
                            <div className="secondContainer">
                                <section className="platforms">
                                    {platforms.filter(platform => platform.type == "sub").map(plat => {
                                        return (
                                            <a key={plat.name} target="_blank" href={plat.web_url}>
                                                <img src={platformIcons[plat.name]} alt="" />
                                            </a>
                                        )
                                    })}
                                </section>
                                <section className="actors">
                                    {fullDetails?.actorList?.slice(0, 5).map(actor =>

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