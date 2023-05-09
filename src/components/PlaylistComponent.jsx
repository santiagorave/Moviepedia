import CardComponent from "./CardComponent"

function Playlist (props){


    return (
        <>
        <section className='movieContainer'>
    <h3>{props.listName}</h3>
    <div className="playlist">
    {props.movieData.map(movie=> {
        //  return <p key={movie.id}>{movie.title}{movie.image}{movie.year}{movie.imDbRating}</p>
        return <CardComponent key={movie.id} movieData={movie}/>
    })}
    </div>
    </section>
    </>
    )
}

export default Playlist