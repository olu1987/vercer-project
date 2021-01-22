import tradesReducer from './modules/trades/tradesReducer';

const rootReducer = (state = {}, action) => ({
  tradesReducer: tradesReducer(state.tradesReducer, action),
});

export default rootReducer;
