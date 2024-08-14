// import css from './MovieList.module.css'

const MovieList = ({ trendingFilms }) => {
  return (
    <ul>
      {trendingFilms.map(({ id, original_title }) => {
        return <li key={id}>{original_title}</li>;
      })}
    </ul>
  );
};

export default MovieList;
