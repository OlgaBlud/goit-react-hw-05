// import css from './MovieList.module.css'

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, original_title }) => {
        return <li key={id}>{original_title}</li>;
      })}
    </ul>
  );
};

export default MovieList;
