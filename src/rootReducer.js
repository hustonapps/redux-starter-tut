import { combineReducers } from 'redux';
import { moviesReducer as movies } from './services/movies/reducer';

export const rootReducer = combineReducers({
  movies,
});
