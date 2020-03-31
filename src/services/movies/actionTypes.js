import { actions } from './actions';

const getMovies = () => ({
  type: actions.GET_MOVIES,
});

const clearMovies = () => ({
  type: actions.CLEAR_MOVIES,
});

export const actionTypes = {
  getMovies,
  clearMovies,
};
