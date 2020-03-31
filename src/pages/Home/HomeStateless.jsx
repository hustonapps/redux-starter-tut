import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../services/movies/actions';

const Home = () => {
  const reduxDispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    if (movies.status === 'not-started') {
      reduxDispatch({
        type: actions.GET_MOVIES,
      });
    }
  }, [movies]);

  useEffect(() => {
    return () => {
      reduxDispatch({
        type: actions.CLEAR_MOVIES,
      });
    };
  }, []);

  if (movies.allMovies.length === 0 && movies.status === 'loading') {
    return <h1>Loading...</h1>;
  }

  if (movies.allMovies.length === 0 && movies.status === 'error') {
    return <h1>{movies.errorMessage}</h1>;
  }

  return (
    <div>
      <h1>Marvel Movie Database (stateless)</h1>
      <ul>
        {movies.allMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
