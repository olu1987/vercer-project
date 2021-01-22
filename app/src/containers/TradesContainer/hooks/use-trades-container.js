import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes } from '../../../constants/action-types';

export const useTradesContainer = () => {
  const dispatch = useDispatch();
  const tradesData = useSelector(state => state.tradesReducer.trades);
  useEffect(() => {
    dispatch({
      type: actionTypes.GET_TRADES_DATA,
      payload: axios({
        method: 'GET',
        url: `http://localhost:3000/trades`,
      })
    });
  }, []);
  return {
    tradesData
  }
}