import * as sagas from './sagas';

export const initSagas = (sagaMiddleware) => {
  const run = sagaMiddleware.run.bind(sagaMiddleware);
  Object.values(sagas).forEach(run);
};
