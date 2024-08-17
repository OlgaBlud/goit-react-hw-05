// import css from './MoviesPage.module.css'

import { useEffect, useState } from "react";
import { fetchMovieByQuery } from "../../api/films-api";

import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  //   const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputQuery = form.elements.query.value;
    // setQuery(inputQuery);
    setSearchParams({ query: inputQuery });
    // form.reset();
  };
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const { results } = await fetchMovieByQuery(searchQuery);
        setMovieList(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [searchQuery]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search movies" />
        <button type="submit">Search</button>
      </form>
      {movieList.length > 0 && <MovieList movies={movieList} />}
    </div>
  );
};

export default MoviesPage;
