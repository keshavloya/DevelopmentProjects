import React from "react";

function MovieList(props) {
  const AddFavourites = props.addFavourites;
  return props.movies.map((movie, index) => (
    <div
      key={index}
      className="col image-container d-flex justify-content-start m-3"
    >
      <img src={movie.Poster} alt="movie poster"></img>
      <div
        onClick={() => props.handleFavouritesClick(movie)}
        className="overlay d-flex align-items-center justify-content-center "
      >
        <AddFavourites />
      </div>
    </div>
  ));
}

export default MovieList;
