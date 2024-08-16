// import css from "./MovieCast.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api/films-api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  useEffect(() => {
    const movieCastRes = async () => {
      try {
        const cast = await fetchMovieCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    movieCastRes();
  }, [movieId]);
  console.log(movieCast);
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  return (
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
  );
};

export default MovieCast;
