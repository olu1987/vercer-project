import { actionTypes } from '../../../constants/action-types';

const defaultState = {
  trades: [],
  loading: false
};

const map = {
  [`${actionTypes.GET_TRADES_DATA}${actionTypes.PENDING}`]: state => ({
    ...state,
    loading: true
  }),
  [`${actionTypes.GET_TRADES_DATA}${actionTypes.FULFILLED}`]: (state, action) => ({
    ...state,
    loading: false,
    trades: action.payload.data
  }),
  [`${actionTypes.GET_TRADES_DATA}${actionTypes.REJECTED}`]: state => ({
    ...state,
    loading: false
  }),
};


export default function sideDrawerReducer(state = defaultState, action) {
  return (map[action.type] && map[action.type](state, action)) || state;
}