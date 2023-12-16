import React from "react";


const MovieList = (props)=>{
const Favmoviecomponent = props.FaviteMovie;
    return (
        <div className="row">
          {props.loading ? (
        <p className="loader d-flex justify-content-center align-items-center">Loading...</p> // Display a loading message or a loader component while loading
      ) : (
        <div className="row">
          {props.movies.map((movie, index) => (
            <div key={index} className=" image-container col d-flex justify-content-start m-3">
              <img src={movie.Poster} alt="movies" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <Favmoviecomponent />
              </div>
            </div>
          ))}
        </div>
      )}
        </div>
    );

};
export default MovieList;