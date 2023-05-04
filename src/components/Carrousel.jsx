function CarrouselFig(props){
    return(
        <figure className="slides" id={props.id}>
            <img src={props.src} alt={props.id}/>
        </figure>
    );
}

function CarrouselSec(props){
    return(
        <section className={props.id}>
            <article id="bgslide"></article>
            <section>
                <h1>{props.title}</h1>
                <div id="slides">
                    <CarrouselFig id="slide1" src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg"/>
                    <CarrouselFig id="slide2" src="https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg?region=0%2C0%2C513%2C810"/>  
                    <CarrouselFig id="slide3" src="https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg"/> 
                </div>
                <div id="navigation">
                    <i className="fa-solid fa-chevron-left" id={props.left}></i>
                    <i className="fa-solid fa-chevron-right" id={props.right}></i>
                </div>
            </section>
        </section>
    );
}

function CarAction(){

}
// puedo poner los elementos en un map
// con un loop obtener todos los elementos
// agregar un <CarrouselFig/> por cada elemento en el json file (api)
//

function MainCarrousel(){
    return(
        <section className="MainC">
            <CarrouselSec id="liked" left="likel" right="liker"/>
            
        </section>
    );
}

export default MainCarrousel