import loading from "../assets/loading.gif"

export default function GetMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : loading
}
