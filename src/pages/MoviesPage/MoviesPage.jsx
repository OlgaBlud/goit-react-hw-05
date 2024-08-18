// import css from './MoviesPage.module.css'

import { useEffect, useState } from "react";
import { fetchMovieByQuery } from "../../api/films-api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  //   const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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
    const getMoviesByQuery = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { results } = await fetchMovieByQuery(searchQuery);
        setMovieList(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesByQuery();
  }, [searchQuery]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search movies" />
        <button type="submit">Search</button>
      </form>
      {movieList.length > 0 && <MovieList movies={movieList} />}
      {isLoading && <Loader />}
      {error && <h2>Something went wrong ...</h2>}
    </div>
  );
};

export default MoviesPage;
