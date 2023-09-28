import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import get from '../data/httpClient'
import GetMovieImg from '../utils/GetMovieImg'
import style from './MovieDetails.module.css'

export default function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState('')

  const { poster_path } = movie

  useEffect(() => {
    get(`3/movie/${movieId}?api_key=ba20c4911b48a7382c1bd9ad1e9ed7f8`).then(
      (data) => {
        console.log(data)
        setMovie(data)
      }
    )
  }, [movieId])

  return (
    <div className={style.movieDetails}>
      <div>
        <h1 className={style.movieTitle}>{movie.title}</h1>
        <p className={style.movieDescription}>{movie.overview}</p>
      </div>
      <img
        className={style.movieImg}
        src={GetMovieImg(poster_path, 500)}
        alt={`${movie.title} movie image`}
      />
    </div>
  )
}
