import { useState } from "react";

//fake data for carrousel test
let fakeData = [{id:0,src:"https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg"},
{id:1,src:"https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg?region=0%2C0%2C513%2C810"},
{id:2,src:"https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg"}];






function CarrouselSec(props){
    const [slide,setSlide]=useState(0);
    let rightHandler = function(){
        setSlide(1);
    }
    let leftHandler = function(){
        setSlide(0);
    }
    let bgHandler = function(){
        let bg = document.getElementById("bgslide")
        
    }
    function CarrouselFig(props){
    
        return(
            <figure className="slides" id={props.id}>
                <img hidden={props.id==slide?false:true} src={props.src} alt={props.alt}/>
            </figure>
        );
    }


    return(
        <section className={props.id}>
            <article id="bgslide"></article>
            <section>
                {/* <h1>"kjhk"</h1> */}
                <div id="slides">
                    {
                        fakeData.map(
                            (data)=>(
                                <CarrouselFig
                                id={data.id}
                                src={data.src}
                                alt={data.id}
                                key={data.id}
                                
                                />
                            )
                        )
                    }
                </div>
                <div id="navigation">
                    <i className="fa-solid fa-chevron-left"  onClick={leftHandler} id={props.left}></i>
                    <i className="fa-solid fa-chevron-right" onClick={rightHandler}  id={props.right}></i>
                </div>
            </section>
        </section>
    );
}

// ()=>{setSlide(1)}



function MainCarrousel(){
    return(
        <section className="MainC">  
            <CarrouselSec id="liked" left="likel" right="liker"/>
        </section>
    );
}

export default MainCarrousel

//to delete after
// function CarrouselSec(props){
//     return(
//         <section className={props.id}>
//             <article id="bgslide"></article>
//             <section>
//                 <h1>{props.title}</h1>
//                 <div id="slides">
//                     <CarrouselFig id="slide1" src="https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg"/>
//                     <CarrouselFig id="slide2" src="https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg?region=0%2C0%2C513%2C810"/>  
//                     <CarrouselFig id="slide3" src="https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg"/> 
//                 </div>
//                 <div id="navigation">
//                     <i className="fa-solid fa-chevron-left" id={props.left}></i>
//                     <i className="fa-solid fa-chevron-right" id={props.right}></i>
//                 </div>
//             </section>
//         </section>
//     );
// }