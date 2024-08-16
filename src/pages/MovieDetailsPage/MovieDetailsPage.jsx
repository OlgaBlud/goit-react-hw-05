// import css from "./MovieDetailsPage.module.css";

import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api/films-api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  //   console.log(movieId, "/movies/:movieId");
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    const movieDetailsRequest = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    movieDetailsRequest();
  }, [movieId]);
  console.log(movieDetails);
  //   console.log(movieDetails.genres);
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div>
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
    </div>
  );
};

export default MovieDetailsPage;

//  const [postDetails, setPostDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null); // "Omg... Some error occured!"

//   useEffect(() => {
//     const fetchPostDetails = async () => {
//       try {
//         setIsLoading(true);
//         const data = await requestSinglePostData(postId);
//         console.log("data: ", data);
//         setPostDetails(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPostDetails();
//   }, [postId]);

//   return (
//     <div>
//       Post Details. ID: {postId}
//       {postDetails !== null && (
//         <div>
//           <h1>{postDetails.title}</h1>
//           <p>{postDetails.body}</p>
//         </div>
//       )}
//       <div>
//         <NavLink to="comments">Comments</NavLink>
//         <NavLink to="reviews">Reviews</NavLink>
//       </div>
//       <div>
//         <Outlet />
//       </div>
//       {isLoading && <Loader />}
//       {error !== null && (
//         <p style={{ color: "red" }}>{error}. Please, try again later.</p>
//       )}
//     </div>
//   );
// };
