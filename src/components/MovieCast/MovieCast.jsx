// import css from "./MovieCast.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api/films-api";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const movieCastRes = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const cast = await fetchMovieCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    movieCastRes();
  }, [movieId]);

  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <>
      <ul>
        {movieCast.map(({ character, id, name, profile_path }) => {
          return (
            <li key={id}>
              <p>Character: {character}</p>
              <p>Actor name: {name}</p>
              <img src={baseUrl + profile_path} alt={name} width={100} />
            </li>
          );
        })}
      </ul>
      {isLoading && <Loader />}
      {error && <h2>Something went wrong ...</h2>}
    </>
  );
};

export default MovieCast;
