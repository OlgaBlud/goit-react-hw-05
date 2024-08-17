// import css from "./MovieDetailsPage.module.css";

import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieDetails } from "../../api/films-api";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    const getMovieDetailsRequest = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetailsRequest();
  }, [movieId]);

  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div>
      <Link to={backLink.current}>Go back</Link>
      {movieDetails !== null && (
        <div>
          <img
            src={baseUrl + movieDetails.backdrop_path}
            alt={movieDetails.title}
          />
          <h2>{movieDetails.title}</h2>{" "}
          <p>User score : {movieDetails.vote_average}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movieDetails.genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      )}
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
      {isLoading && <Loader />}
      {/* // {error && <Heading title="Something went wrong ..." bottom />} */}
    </div>
  );
};

export default MovieDetailsPage;
