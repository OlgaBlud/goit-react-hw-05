// '/movies' – компонент MoviesPage, сторінка пошуку кінофільмів за ключовим словом.
// import css from './MoviesPage.module.css'

import { useEffect, useState } from "react";
import { fetchMovieByQuery } from "../../api/films-api";

import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputQuery = form.elements.query.value;
    setQuery(inputQuery);
    form.reset();
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const { results } = await fetchMovieByQuery(query);
        setMovieList(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [query]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search movies" />
        <button type="submit">Search</button>
      </form>
      {movieList.length > 0 && <MovieList movies={movieList} />}
      {/* <MovieList movies={movieList} /> */}
    </div>
  );
};

export default MoviesPage;

// const handleSubmit = (searchValue) => {
//   setQuery(searchValue);
//   setImages([]);
//   setPage(1);
//   setNextPage(false);
//   setIsEmpty(false);
//   setError(null);
// };
// useEffect(() => {

//   const fetchImages = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const { results, total, total_pages } = await getPhotos(query, page);

//       if (!total) {
//         setIsEmpty(true);

//         const notify = () =>
//           toast("No photos for such query!", {
//             duration: 3000,
//             position: "top-center",
//             style: { marginTop: 100 },
//             icon: "😢",
//           });
//         notify();
//       }
//       setImages((prevImages) => [...prevImages, ...results]);
//       setNextPage(page < total_pages);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   fetchImages();
// }, [query, page]);
