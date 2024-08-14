import axios from "axios";
// список найпопулярніших
// https://api.themoviedb.org/3/trending/movie/{time_window}
//      --url 'https://api.themoviedb.org/3/trending/movie/day?language=en-US' \

// пошук фільму за ключовим словом
// https://api.themoviedb.org/3/search/movie
//      --url 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1' \

// запит повної інформації про фільм
// запит інформації про акторський склад
// запит оглядів для сторінки кінофільму.

// const API_KEY = "2b797d5086fa4a91bb2a8fb9e27d71ff";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjc5N2Q1MDg2ZmE0YTkxYmIyYThmYjllMjdkNzFmZiIsIm5iZiI6MTcyMzIxOTUyOC41MTE3MjMsInN1YiI6IjY2YjYzYTg0ODMxZTNmNDA5ZTI3MDY0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VYASJenUqYziFDeY8b0yyYfd6uDPU2xk763XC3gXwv4",
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day", options);
  // console.log(response);
  return response.data;
};
