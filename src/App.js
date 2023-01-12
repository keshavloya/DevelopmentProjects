import React, { useEffect, useState } from "react";
import MovieList from "./components/movieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourite";
import RemoveFavourites from "./components/RemoveFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=453fb1c1&`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  function addFavouriteMovie(movie) {
    setFavourites((prevList) => {
      return [...prevList, movie];
    });
  }

  function removeFavouriteMovie(remove) {
    const newList = favourites.filter((movie) => {
      return movie.imdbID !== remove.imdbID;
    });
    setFavourites(newList);
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-item-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox value={searchValue} setValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          addFavourites={AddFavourites}
        />
      </div>
      <div className="row">
        <MovieListHeading heading="Favorites" />
      </div>
      <div className="row">
        <MovieList
          movies={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          addFavourites={RemoveFavourites}
        />
      </div>
    </div>
  );
}

export default App;
