function Modal(props) {
    const closeModal = function() {
        props.handler(false)
    }
    // const getDetails = function () {
    //     fetch('/src/data/Top250.json').then((data) => {
    //       return data.json()
    //     }).then(data => {setMovies(data.items); setLoading(false)});
    //   }
    return (
         <div id="myModal" className="modal">
            <div className="modal-content">
                <span onClick={closeModal} className="close">&times;</span>
                <h3>{props.movieData.id}</h3>
                <figure>
                    <img className="posterDesc" src={props.movieData.image} alt={props.movieData.title} />
                    <figcaption>{props.movieData.fullTitle}</figcaption>
                </figure>
            </div>
        </div>

    
    )
}

export default Modal;