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
  const [tradePriceOptions, setTradePriceOptions] = useState([]);
  const [selectedProductName, setSelectedProductName] = useState(null);
  const [selectedBrokerName, setSelectedBrokerName] = useState(null);
  const [selectedSaleType, setSelectedSaleType] = useState(tradesDataFields.SIDE.options.BUY.value);
  const [minTradePrice, setMinTradePrice] = useState(null);
  const [maxTradePrice, setMaxTradePrice] = useState(null);
  const dispatch = useDispatch();
  const tradesData = useSelector(state => state.tradesReducer.trades);
  const isSellMode = selectedSaleType === tradesDataFields.SIDE.options.SELL.value;

  const onToggleChange = () => {
    return setSelectedSaleType(selectedSaleType === tradesDataFields.SIDE.options.SELL.value
      ? tradesDataFields.SIDE.options.BUY.value
      : tradesDataFields.SIDE.options.SELL.value);
  };

  const getTradesTableData = (
    data,
    selectedSaleType,
    selectedProductName,
    selectedBrokerName,
    minTradePrice,
    maxTradePrice
  ) => {
    const filtered = [];
    for (let i = 0; i < data.length; i++) {
      const entry = data[i];
      if (entry[tradesDataFields.SIDE.value] === selectedSaleType
        && (!selectedProductName || entry[tradesDataFields.PRODUCT_NAME.value] === selectedProductName.value)
        && (!selectedBrokerName || entry[tradesDataFields.BROKER_NAME.value] === selectedBrokerName.value)
        && (!minTradePrice || parseInt(entry[tradesDataFields.TRADE_PRICE.value]) > minTradePrice.value)
        && (!maxTradePrice || parseInt(entry[tradesDataFields.TRADE_PRICE.value]) < maxTradePrice.value))
        {
          filtered.push(entry);
        }
    }
    return filtered;
  };

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
  };

  const getTradePriceOptions = (data, field) => {
    const prices = [];
    const options = [];
    for (let i = 0; i < data.length; i++) {
      prices.push(parseInt(data[i][field]));
    }
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    for (let i = min - 10; i < max + 10; i++) {
      if (i % 5 === 0) {
        options.push({ label: `${i}`, value: i });
      }
    }
    return options;
  }

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
    setTradesTableData(getTradesTableData(
      tradesData,
      selectedSaleType,
      selectedProductName,
      selectedBrokerName,
      minTradePrice,
      maxTradePrice
    ));
  }, [tradesData, selectedProductName, selectedBrokerName, selectedSaleType, minTradePrice, maxTradePrice]);
  
  useEffect(() => {
    setProductNameOptions(getOptionsFromData(tradesData, tradesDataFields.PRODUCT_NAME.value));
    setBrokerNameOptions(getOptionsFromData(tradesData, tradesDataFields.BROKER_NAME.value));
    setTradePriceOptions(getTradePriceOptions(tradesData, tradesDataFields.TRADE_PRICE.value));
  }, [tradesData]);

  return {
    tradesData,
    tradesTableData,
    productNameOptions,
    brokerNameOptions,
    selectedProductName,
    setSelectedProductName,
    selectedBrokerName,
    setSelectedBrokerName,
    selectedSaleType,
    setSelectedSaleType,
    onToggleChange,
    isSellMode,
    minTradePrice,
    setMinTradePrice,
    maxTradePrice,
    setMaxTradePrice,
    tradePriceOptions
  }
}