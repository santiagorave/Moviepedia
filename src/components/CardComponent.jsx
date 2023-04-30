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
      {modal && <Modal handler={clickHandlerChild} movieData={props.movieData} />}
      <img className='poster' onClick={clickHandler} src={props.movieData.image} />
    </>
  )

}
export default CardComponent;