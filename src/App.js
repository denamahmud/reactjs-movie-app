import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Movies from './pages/Movies';
import Home from './pages/Home';  
import './App.css';  
import Footer from './components/Footer';
import SearchMovies from './pages/SearchMovies'; 
import Details from './pages/Details';
import axios from 'axios';
import { options } from './components/Options';
import { useEffect, useState } from 'react';

function App() {

  const [genres, setGenres] = useState([])

  const getGenres = () => {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', options) 
    .then(res => setGenres(res.data.genres)) 
}
  useEffect(() => {
     getGenres()
  }, [])

  return (
   <>
     <HashRouter>
        <Routes>
          <Route path="/" element={<Home genres={genres}/>}/>
          <Route path="/search-movies" Component={Movies}/>  
          <Route path="/movies/:name" Component={SearchMovies}/>  
          <Route path="/details/:id" Component={Details}/> 
        </Routes>
    </HashRouter>
    <Footer genres={genres} setGenres={setGenres}/>
   </>
  )
}

export default App;
