import { AgGridReact } from 'ag-grid-react';
import Select from 'react-select';
import Toggle from 'react-toggle';
import 'rc-slider/assets/index.css';

import { tradesTableColumns } from '../../config/trades-table-config';
import { tradesDataFields } from '../../constants/trades-data';
import { useTradesContainer } from './hooks/use-trades-container';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import {
  TableWrapperStyled,
  FiltersRowStyled,
  SelectWrapperStyled,
  ToggleLabelStyled,
  FilterLabelStyled,
  ToggleWrapperStyled,
  MainWrapperStyled
} from './style';


const TradesContainer = () => {
  const {
    tradesTableData,
    productNameOptions,
    brokerNameOptions,
    selectedProductName,
    setSelectedProductName,
    selectedBrokerName,
    setSelectedBrokerName,
    onToggleChange,
    isSellMode,
    tradePriceOptions,
    minTradePrice,
    setMinTradePrice,
    maxTradePrice,
    setMaxTradePrice
  } = useTradesContainer();
  return (
    <MainWrapperStyled>
      <FiltersRowStyled>
        <SelectWrapperStyled>
          <FilterLabelStyled>{tradesDataFields.PRODUCT_NAME.label}</FilterLabelStyled>
          <Select
            options={productNameOptions}
            value={selectedProductName}
            onChange={val => setSelectedProductName(val)}
            isClearable
          />
        </SelectWrapperStyled>
        <SelectWrapperStyled>
          <FilterLabelStyled>{tradesDataFields.BROKER_NAME.label}</FilterLabelStyled>
          <Select
            options={brokerNameOptions}
            value={selectedBrokerName}
            onChange={val => setSelectedBrokerName(val)}
            isClearable
          />
        </SelectWrapperStyled>
        <ToggleLabelStyled>
          <SelectWrapperStyled>
            <FilterLabelStyled>{tradesDataFields.SIDE.label}</FilterLabelStyled>
            <ToggleWrapperStyled>
              <span>{tradesDataFields.SIDE.options.BUY.label}</span>
              <Toggle
                checked={isSellMode}
                icons={false}
                onChange={onToggleChange} 
              />
              <span>{tradesDataFields.SIDE.options.SELL.label}</span>
            </ToggleWrapperStyled>
          </SelectWrapperStyled>
        </ToggleLabelStyled>
        <SelectWrapperStyled>
          <FilterLabelStyled>{tradesDataFields.MIN_TRADE_PRICE}</FilterLabelStyled>
          <Select
            options={tradePriceOptions}
            value={minTradePrice}
            onChange={val => setMinTradePrice(val)}
            isClearable
          />
        </SelectWrapperStyled>
        <SelectWrapperStyled>
          <FilterLabelStyled>{tradesDataFields.MAX_TRADE_PRICE}</FilterLabelStyled>
          <Select
            options={tradePriceOptions}
            value={maxTradePrice}
            onChange={val => setMaxTradePrice(val)}
            isClearable
          />
        </SelectWrapperStyled>
      </FiltersRowStyled>
      <TableWrapperStyled  className="ag-theme-balham">
        <AgGridReact
          columnDefs={tradesTableColumns}
          rowData={tradesTableData}
          headerHeight={50}
          rowHeight={40}
          defaultColDef={{
            resizable: true
          }}
        />
      </TableWrapperStyled>
    </MainWrapperStyled>
  );
}

export default TradesContainer;