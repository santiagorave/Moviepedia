import { useState, useEffect } from "react";
import LoadingSpinner from "./Spinner";
function Modal(props) {
    const closeModal = function () {
        props.handler(false)
    }
    const [fullDetails, setfullDetails] = useState({});
    const [platforms, setPlatforms] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [platformIcons, setIcons] = useState({
        "HBO MAX": "/src/data/square social logo 400 x 400_0.webp",
        "Netflix": "/src/data/Netflix_2015_logo.svg",
        "Hulu": "/src/data/Hulu_logo_(2014).svg",
        "Amazon Prime": "/src/data/Amazon_Prime_Video_logo.svg",
        "Disney+": "/src/data/Disney+_logo.svg",
        "AppleTV+": "/src/data/Apple_TV_Plus_Logo.svg",
        "Hayu": "/src/data/Hayu_Logo_Coral_svg.svg",
        "Paramount+": "/src/data/Paramount+_logo.svg",
        "Showtime": "/src/data/Showtime.svg",
        "Crave": "/src/data/Crave_2018_logo.svg",
        "Peacock Premium": "/src/data/NBCUniversal_Peacock_Logo.svg",
        "Crave Starz": "/src/data/Crave_2018_logo.svg",
        "Stan": "/src/data/stan-sport-logo-BCB97A49EA-seeklogo.com.png",
        "STARZ": "/src/data/Starz_2022.svg",
        "Foxtel Now": "/src/data/Foxtel_logo_2020.svg",
        "Sky Go": "/src/data/Logo_Sky_Go.svg",
        "Now TV": "/src/data/Now_logo.svg",
        "BINGE": "/src/data/Binge_logo.svg",
        "Kanopy": "/src/data/Kanopy_logo.png",
        "Hulu with Showtime": "/src/data/Hulu_logo_(2014).svg",
        "Youtube Premium": "/src/data/YouTube_Premium_logo.svg",
        "Crunchyroll Premium": "/src/data/Crunchyroll_Logo.svg",
        "Topic": "/src/data/Topic.png",
        "The Criterion Channel": "/src/data/criterion_100px.png",
        "Fandor": "/src/data/fandor_100px.png",
        "Shudder": "/src/data/shudder8574.jpg",
        "WWE Network": "/src/data/WWE_Network_logo.svg.png",
        "Acorn TV (Via Amazon Prime)": "/src/data/41CwrHhcHKL.png",
        "Cinemax (Via Amazon Prime)": "/src/data/Cinemax_2016.svg",
        "Comedy Central Stand-Up Plus (Via Amazon Prime)": "/src/data/standup.jpg",
        "Curiosity Stream": "/src/data/CuriosityStream.svg",
        "Fandor (Via Amazon Prime)": "/src/data/fandor_100px.png",
        "Hallmark Movies Now (Via Amazon Prime)": "/src/data/moviesnow.png",
        "Shout! Factory TV (Via Amazon Prime)": "/src/data/shout.png",
        "Showtime (via Amazon Prime)": "/src/data/Showtime.svg",
        "Shudder (Via Amazon Prime)": "/src/data/shudder8574.jpg",
        "STARZ (Via Amazon Prime)": "/src/data/Starz_2022.svg",
        "SundanceNow Doc Club (Via Amazon Prime)": "/src/data/sundance-now5129.jpg",
        "DirecTV On Demand": "/src/data/DIRECTV_STREAM_2021_logo.svg",
        "Spectrum On Demand": "/src/data/Charter_Spectrum_logo.svg",
        "FX Now Canada": "/src/data/fx-canada2539.jpg",
        "Acorn TV": "/src/data/41CwrHhcHKL.png",
        "AMC+": "/src/data/Amc_logo.svg.png",
        "Beamafilm": "/src/data/Beam.tv_logo.svg",
        "BET+": "/src/data/BET_Logo.svg",
        "BFI Player": "/src/data/bfi-player-logo-vector.png",
        "Britbox": "/src/data/BritBox_logo.svg",
        "Britbox (Via Amazon Prime)": "/src/data/BritBox_logo.svg",
        "Cinemax (Via Hulu)": "/src/data/Cinemax_2016.svg",
        "Clarovideo": "/src/data/Logo_de_Claro_Video.svg",
        "Curiosity Stream (Via Amazon Prime)": "/src/data/CuriosityStream.svg",
        "Darkmatter TV": "/src/data/Dark_Matter_serie_logo.png",
        "Discovery+": "/src/data/Discovery_Plus_logo.svg.png",
        "Epix (Via Amazon Prime)": "/src/data/Epix_Logo_2019.svg",
        "Epix Now": "/src/data/Epix_Logo_2019.svg",
        "Flix Premiere": "/src/data/1251767.png",
        "FlixFling": "/src/data/1251767.png",
        "fuboTV": "/src/data/FuboTV_logo.svg",
        "Funimation": "/src/data/1200px-Funimation_Logo.svg.png",
        "Globoplay": "/src/data/Globoplay_logo_2020.svg.png",
        "GuideDoc": "/src/data/icon-guidedoc-1024.png",
        "Hallmark Movies Now": "/src/data/moviesnow.png",
        "HBO (Via Hulu)": "/src/data/square social logo 400 x 400_0.webp",
        "HiDive": "/src/data/HIDIVE_logo.webp",
        "Hollywood Suite": "/src/data/Hollywood_Suite_logo.png",
        "Hoopla": "/src/data/Hoopla_logo.svg.png",
        "Hotstar": "/src/data/Disney+_Hotstar_logo.svg.png",
        "ICI TOU.TV": "/src/data/Ici_toutv-logo.svg",
        "ITV Player": "/src/data/ITV_Player_old.webp",
        "MUBI": "/src/data/Mubi_logo.svg",
        "Quickflix": "/src/data/Quickflix-logo.png",
        "STARZ (Via Hulu)": "/src/data/Starz_2022.svg",
        "Sun Nxt": "/src/data/Sun_tv_logo.svg",
        "SundanceNow Doc Club": "/src/data/sundance-now5129.jpg",
        "Virgin TV GO": "/src/data/VirginTVGo.webp",
        "Zee5": "/src/data/Zee5-official-logo.jpeg"


    });

    useEffect(() => {
        const API_KEY = "k_5w96icwm";
        const API_KEY_PLATFORM = "d85kYSxRrSvSdKsv9deB4tPyy6NJ7Damby0TAmMA"
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
                        <div className="newContainer">
                            <div>
                                <aside>
                                    <span onClick={closeModal} className="close floatclass">&times;</span>
                                </aside>
                                <section>
                                    <iframe src={`${fullDetails?.trailer?.linkEmbed}?autoplay=false&width=700`} width="700" height="400" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" frameBorder="no" scrolling="no"></iframe>
                                    <div className="details">
                                        <small>
                                            {fullDetails.genreList?.slice(0, 1).map(genre => <span key={genre.value}>{genre.value}</span>)}
                                        </small>
                                        <h2>{props.movieData.fullTitle}</h2>
                                        <p>{fullDetails.plot}</p>
                                        <div className="buttons">
                                            <button><i className="fa-solid fa-thumbs-up"></i>   I liked this movie!</button>
                                            <button><i className="fa-solid fa-thumbs-down"></i>   I hated this movie!</button>
                                            <button><i className="fa-solid fa-bookmark"></i>  Add to a playlist</button>

                                        </div>
                                        <div className="platforms">
                                            {platforms.filter(platform => platform.type == "sub").slice(0, 3).map(plat => {
                                                return (
                                                    <a key={plat.name} target="_blank" href={plat.web_url}>
                                                        <img src={platformIcons[plat.name]} alt="" />
                                                    </a>
                                                )
                                            })}
                                        </div>

                                    </div>
                                </section>
                            </div>
                            <div className="actors">
                                {fullDetails?.actorList?.slice(0, 6).map(actor =>

                                    <figure key={actor.id}>
                                        <img src={actor.image} alt={actor.name} />
                                        <figcaption>
                                            <p >{actor.name}</p>
                                        </figcaption>
                                    </figure>
                                )
                                }
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>

    )
}

export default Modal;