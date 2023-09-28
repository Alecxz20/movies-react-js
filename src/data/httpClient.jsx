const API = 'https://api.themoviedb.org/'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTIwYzQ5MTFiNDhhNzM4MmMxYmQ5YWQxZTllZDdmOCIsInN1YiI6IjY0OTYzODVkYmJkMGIwMDBlNzJlZDQ5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iWhrYVltRicH7TyJdBdG0h9MI9idyA7KX311ER9sAxc',
  },
}

export default function get(path) {
  return fetch(API + path, options).then((res) => res.json())
}
