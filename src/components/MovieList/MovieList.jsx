// import css from './MovieList.module.css'

import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  //   console.log(location);

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                <h3>{title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
