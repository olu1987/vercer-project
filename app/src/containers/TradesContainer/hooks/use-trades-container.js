import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes } from '../../../constants/action-types';
import { tradesDataFields } from '../../../constants/trades-data';
import { memoizedArrayToMap } from '../../../utils';

export const useTradesContainer = () => {
  const [tradesTableData, setTradesTableData] = useState([]);
  const [productNameOptions, setProductNameOptions] = useState([]);
  const [brokerNameOptions, setBrokerNameOptions] = useState([]);
  const dispatch = useDispatch();
  const tradesData = useSelector(state => state.tradesReducer.trades);
  const getOptionsFromData = (data, field) => {
    const options = [];
    const keys = [];
    for (let i = 0; i < data.length; i++) {
      const val = data[i][field];
      if (!keys.includes(val)) {
        options.push({ label: val, value: val });
        keys.push(val);
      }
    }
    return options;
  }
  console.log(getOptionsFromData(tradesData, tradesDataFields.PRODUCT_NAME.value));
  useEffect(() => {
    dispatch({
      type: actionTypes.GET_TRADES_DATA,
      payload: axios({
        method: 'GET',
        url: `http://localhost:3000/trades`,
      })
    });
  }, []);
  useEffect(() => {
    setTradesTableData(tradesData);
    setProductNameOptions(getOptionsFromData(tradesData, tradesDataFields.PRODUCT_NAME.value));
    setBrokerNameOptions(getOptionsFromData(tradesData, tradesDataFields.BROKER_NAME.value));
  }, [tradesData]);

  return {
    tradesData,
    tradesTableData,
    productNameOptions,
    brokerNameOptions
  }
}