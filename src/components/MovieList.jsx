import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import get from '../data/httpClient'
import style from "./MovieList.module.css"

export default function MovieList() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    get('3/discover/movie').then((data) => {
      setMovies(data.results)
    })
  }, [])

  return (
    <ul className={style.movie__container}>
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  )
}
