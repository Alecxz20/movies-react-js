import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import MovieDetails from '../pages/MovieDetails'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path='/movies/:movieId' element={<MovieDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}
