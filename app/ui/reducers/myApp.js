import createReducer from 'redux-createreducer';

const initialState = {
  count: 0
};

const actionHandlers = {
  'INCREMENT': (state, action) => Object.assign({}, { count: state.count + 1 }),
  'DECREMENT': (state, action) => Object.assign({}, { count: state.count - 1 })
};

export default createReducer(initialState, actionHandlers);
