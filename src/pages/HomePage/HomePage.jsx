// '/' – компонент HomePage, домашня сторінка із списком популярних кінофільмів.
// import css from './HomePage.module.css'

import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../api/films-api";
const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  useEffect(() => {
    const trendingMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        // console.log(response);
        setTrendingFilms(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    trendingMovies();
  }, []);
  //   console.log(trendingFilms);
  return (
    <div>
      <h2>Home Page</h2>
      <MovieList movies={trendingFilms} />
    </div>
  );
};

export default HomePage;
