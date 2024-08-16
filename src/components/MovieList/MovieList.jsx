// import css from './MovieList.module.css'

import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
