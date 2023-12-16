
import React, { useEffect, useState } from 'react';
import MovieList from './Components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MovieListHeading from './Components/MovieListHeading';
import SearchBox from './Components/SearchBox';
import FavouriteMovie from './Components/FavouriteMovie';

function App() {

 const [movies, setMovies] = useState([])
 const [movieSearchValue, setMovieSearchValue] = useState('')
 const [loading, setLoading] = useState(false);
 

const getMovieRequest = async()=>{
  if(movieSearchValue.trim!==''){
  
  setLoading(true);
  const url = `http://www.omdbapi.com/?s=${movieSearchValue}&apikey=5adf6fb8`;
  const responce = await fetch(url);
  const responceJson = await responce.json();

  if(responceJson.Search){
    setMovies(responceJson.Search);
  }
  else{
    setMovies([])
  }
  setLoading(false)
}
  else{
    setMovies([])
  }

  
};

useEffect(()=>{
  getMovieRequest();
},[movieSearchValue]);

  return (
    <div className='row container fluid movie-app'>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading = 'Fav-Movies' />
        <SearchBox movieSearchValue = {movieSearchValue} setMovieSearchValue = {setMovieSearchValue} />
      </div>
      <div className='row'>
      <MovieList movies = {movies} FaviteMovie = {FavouriteMovie} loading = {loading}/>
        
      </div>
     
    </div>
  );
}

export default App;
