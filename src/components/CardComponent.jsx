import Modal from "./modal";
import { useState } from "react";

const API_KEY = "k_5w96icwm";
function CardComponent(props) {
  const [modal, setModal] = useState(false);

  const clickHandler = function () {
    setModal(!modal);
  }
  const clickHandlerChild = function (data) {
    setModal(data);
  }
  return (
    <>
      {modal && <Modal user={props.user} handler={clickHandlerChild} movieData={props.movieData} />}
      <figure onClick={clickHandler} className="hover-poster">
      <img className='poster'  src={props.movieData.image} />
      <figcaption>
        <div>
        <p>{props.movieData.title}</p>
        <p>{props.movieData.year}</p>
        <p><i className="fa-solid fa-star"></i>   {props.movieData.imDbRating ? props.movieData.imDbRating : "Not rated yet" }</p>
        </div>
      </figcaption>
      </figure>
    </>
  )

}
export default CardComponent;