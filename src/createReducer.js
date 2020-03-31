export const createReducer = (initialState, actionMap) => {
  const map = { ...actionMap };
  return (state = { ...initialState }, action) => {
    if (map[action.type]) {
      return map[action.type](state, action);
    }

    return state;
  };
};
