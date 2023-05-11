function LikedNotLogged(props){

    const closeLikedModal = function () {
        props.handler(false)
    }

    return(
        <article className="TryLike" id="TryLike">

            <section className='TryLikeWrap' id='TryLikeWrap'>

                <form>
                    <span onClick={closeLikedModal} className="close">&times;</span>

                    <aside>
                        <h4>
                            You need to be logged
                        </h4>
                    </aside>

                </form>
            </section>

        </article>

    );
}

export default LikedNotLogged;