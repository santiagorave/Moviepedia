import { useState, useEffect } from 'react';
import LoadingSpinner from './Spinner';
import CardComponent from './CardComponent';

function GetData(props) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page,setPage] = useState([0,6]);
  const getElements = function () {
    fetch(props.data).then((data) => {
      return data.json()
    }).then(data => {setMovies(data.items); setLoading(false)});
  }
  const handlePaginationPrev = function() {
    let newValue =page.map(el=>el-5);
    if(!newValue.find(el=>el<0)) {
    setPage(newValue);
    }

  }
  const handlePaginationNext = function() {
    let newValue =page.map(el=>el+5)
    if(!newValue.find(el=>el>252)) {
      setPage(newValue);
      }
  }

  useEffect(() => {
    getElements()

  }, [])

  return (
    <>
    <section className='movieContainer'>
      <h2>{props.title}</h2>
      <article>
      <i onClick={handlePaginationPrev} className="fa-solid fa-chevron-left"></i>
      {isLoading ? <LoadingSpinner/>: (
        <>
          {movies.slice(...page).map(movie => (
            <CardComponent user={props.user} key={movie.id} movieData={movie}/>
          ))}
        </>

      )}
      <i onClick={handlePaginationNext} className="fa-solid fa-chevron-right"></i>
      </article>
    </section>
    </>
  )


}

export default GetData;