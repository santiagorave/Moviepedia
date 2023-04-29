function CarrouselFig(props){
    return(
        <figure className="slides">
            <img src={props.src} alt={props.id}/>
            <figcaption>
            {/* features coming with the slides */}
                <article>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-bookmark"></i>
                </article>
                <aside className="company">
                    <a href="" ><img src="https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"/>Watch Now</a>
                    {/* src is gonna be a file coming from a class */}
                </aside>
            </figcaption> 
        </figure>
    );
}

function CarrouselSec(props){
    return(
        <section className={props.id}>
            <h1>{props.title}</h1>
            <div id="slides">
                 <CarrouselFig id="slide1" src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg"/>
                 <CarrouselFig id="slide2" src="https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg?region=0%2C0%2C513%2C810"/>  
                 <CarrouselFig id="slide3" src="https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg"/> 
            </div>
            <div id="navigation">
                <i class="fa-solid fa-chevron-left"></i>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </section>
    );
}

function MainCarrousel(){
    return(
        <section className="MainC">
            <CarrouselSec id="liked" title="Most Liked Movies"/>
            <CarrouselSec id="watched" title="Most Watched Movies"/>
        </section>
    );
}

export default MainCarrousel