// '/' – компонент HomePage, домашня сторінка із списком популярних кінофільмів.
// import css from './HomePage.module.css'

import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <MovieList />
    </div>
  );
};

export default HomePage;
