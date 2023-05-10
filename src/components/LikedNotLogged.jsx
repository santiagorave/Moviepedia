function LikedNotLogged(props){

    const closeLikedModal = function () {
        props.handler(false)
    }

    return(
        <article className="liked-userNotLogged" id="liked-userNotLogged">

            <section className='liked-userNotLoggedWrap' id='liked-userNotLoggedWrap'>

                <form>
                    <span onClick={closeLikedModal} className="close">&times;</span>

                    <aside>
                        <h4>
                            You need to login to like a movie
                        </h4>
                    </aside>

                </form>
            </section>

        </article>
    );
}

export default LikedNotLogged;