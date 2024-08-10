// '/movies' – компонент MoviesPage, сторінка пошуку кінофільмів за ключовим словом.
// import css from './MoviesPage.module.css'

import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  return (
    <div>
      <h2>MoviesPage</h2>
      <MovieList />
    </div>
  );
};

export default MoviesPage;
