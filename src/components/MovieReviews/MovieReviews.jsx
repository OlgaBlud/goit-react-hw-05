// import css from "./MovieReviews.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReview } from "../../api/films-api";

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    const movieReviewsRes = async () => {
      const reviews = await fetchMovieReview(movieId);
      setMovieReviews(reviews);
    };
    movieReviewsRes();
  }, [movieId]);
  console.log(movieReviews);
  if (movieReviews.length === 0) {
    return <p>There are no reviews yet</p>;
  } else {
    return (
      <ul>
        {movieReviews.map(({ content, author, id }) => {
          return (
            <li key={id}>
              <p>{content}</p>
              <p>{author}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default MovieReviews;
