import style from './MovieCard.module.css'
import { Link } from 'react-router-dom'
import GetMovieImg from '../utils/GetMovieImg'

export default function MovieCard({ movie }) {
  const { title, poster_path, release_date, id } = movie
  const myDate = new Date(release_date)
  return (
    <li className={style.movie}>
      <Link to={`/movies/${id}`}>
        <img
          className={style.movie__img}
          src={GetMovieImg(poster_path, 200)}
          alt={`${title} movie image`}
        />
        <h1 className={style.movie__title}>{title}</h1>
        <p className={style.movie__text}>
          {myDate.toDateString().split(' ').slice(1).join(' ')}
        </p>
      </Link>
    </li>
  )
}
