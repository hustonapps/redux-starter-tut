import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { actions } from './actions';

export function* getMovies() {
  yield takeLatest(actions.GET_MOVIES, handleGetMovies);
}

export function* handleGetMovies() {
  try {
    yield put({ type: actions.LOADING_MOVIES });
    const { data } = yield call(axios.get, '/api/movies');
    yield put({ type: actions.GET_MOVIES_SUCCESS, data });
  } catch (e) {
    yield put({ type: actions.GET_MOVIES_ERROR, error: e });
  }
}
