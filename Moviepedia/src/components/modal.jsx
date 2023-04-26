function Modal(props) {
    const closeModal = function() {
        props.handler(false)
    }

    return (
         <div id="myModal" className="modal">
            <div className="modal-content">
                <span onClick={closeModal} className="close">&times;</span>
                <p>{props.movieData.title}</p>
            </div>
        </div>

    
    )
}

export default Modal;