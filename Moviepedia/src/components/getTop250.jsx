import { useState, useEffect } from 'react';
import LoadingSpinner from './Spinner';
import Modal from './modal';
import CardComponent from './CardComponent';

function GetData() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // async function logJSONData() {
  //     let response = await fetch('/src/data/Top250.json');
  //        let data = await response.json();
  //        console.log(data.items)
  //   }
  //   logJSONData();

  const getElements = function () {
    fetch('/src/data/Top250.json').then((data) => {
      return data.json()
    }).then(data => {setMovies(data.items); setLoading(false)});
  }

  useEffect(() => {
    getElements()

  }, [])
  return (
    <>
    <section className='movieContainer'>
      <h2>Top 250 Movies of All Time</h2>
      <article>
      <i className="fa-solid fa-chevron-left"></i>
      {isLoading ? <LoadingSpinner/>: (
        <>
          {movies.slice(0, 6).map(movie => (
            <CardComponent key={movie.id} movieData={movie}/>
          ))}
        </>

      )}
      <i className="fa-solid fa-chevron-right"></i>
      </article>
    </section>
    </>
  )


}

export default GetData;