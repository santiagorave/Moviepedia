import Movie from "../classes/Movie";
import { useState } from "react";
import Popular from "../data/Popular-TV.json"
//fake data for carrousel test
let fakeData = [{id:0,name:"avatar",src:"https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg"},
{id:1,name:"pocajonta",src:"https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg?region=0%2C0%2C513%2C810"},
{id:2,name:"cars",src:"https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg"}];



function Container(){
    const [slide,setSlide]=useState(1);
    let rightHandler = function() {
    if (slide === Popular.items.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };
    let leftHandler = function() {
    if (slide === 1) {
      setSlide(Popular.items.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };
//   console.log(JSON.stringify(Popular.items[0].image));
    
    function BackGround(props){
        return(
            <article style={{ backgroundImage: `url(${Popular.items[slide].image})` }} id={props.id}>
    
            </article>    
        );
    }
    function Slides(props){
        const imgId = parseInt(props.id)
        return(
            <figure className="slides" id={props.id}>
                <img hidden={imgId==slide?false:true} src={Popular.items[slide].image} alt={props.alt}/>
            </figure>
        );   
    }
    return(
        <section className="liked">
            {
                Popular.items.map(
                    (bg)=>(
                        <BackGround
                        id={bg.title}
                        />
                    )
                )
            }
            <section>
                <div id="slides">
                    {
                        Popular.items.map(
                            (data) =>(
                                <Slides
                                id={data.rank}
                                src={data.image}
                                alt={data.id}
                                />
                            )
                        )
                    }
                </div>
                <div id="navigation">
                    <i className="fa-solid fa-chevron-left" onClick={leftHandler} id="likel"></i>
                    <i className="fa-solid fa-chevron-right" onClick={rightHandler} id="liker"></i>
            </div>
            </section>
            
        </section>
    );
}

function MainCarrousel(){
    return(
        <section className="MainC">
            <Container/>
        </section>
    );
}

export default MainCarrousel