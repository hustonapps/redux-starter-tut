import { createReducer } from '../../createReducer';
import { actions } from './actions';

export const initialState = {
  allMovies: [],
  status: 'not-started',
  errorMessage: null,
};

export const actionMap = {
  [actions.LOADING_MOVIES]: (state) => ({
    ...state,
    status: 'loading',
  }),
  [actions.GET_MOVIES_SUCCESS]: (state, action) => {
    return {
      ...state,
      allMovies: action.data,
    };
  },
  [actions.GET_MOVIES_ERROR]: (state, action) => {
    return {
      ...state,
      status: 'error',
      errorMessage:
        (action.error && action.error.message) || 'An error occurred',
    };
  },
  [actions.CLEAR_MOVIES]: () => {
    return { ...initialState };
  },
};

export const moviesReducer = createReducer(initialState, actionMap);
