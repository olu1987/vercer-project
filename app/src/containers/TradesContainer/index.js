import { AgGridReact } from 'ag-grid-react';

import Filters from './Filters';
import SmallLoader from '../../components/SmallLoader';

import { tradesTableColumns } from '../../config/trades-table-config';
import { useTradesContainer } from './hooks/use-trades-container';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import {
  TableWrapperStyled,
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
    setMaxTradePrice,
    loading
  } = useTradesContainer();
  return (
    <MainWrapperStyled>
      {loading && <SmallLoader />}
      <Filters
         productNameOptions={productNameOptions}
         brokerNameOptions={brokerNameOptions}
         tradePriceOptions={tradePriceOptions}
         selectedProductName={selectedProductName}
         selectedBrokerName={selectedBrokerName}
         isSellMode={isSellMode}
         minTradePrice={minTradePrice}
         maxTradePrice={maxTradePrice}
         onProductNameChange={val => setSelectedProductName(val)}
         onBrokerNameChange={val => setSelectedBrokerName(val)}
         onToggleChange={onToggleChange}
         onMinTradePriceChange={val => setMinTradePrice(val)}
         onMaxTradePriceChange={val => setMaxTradePrice(val)}
      />
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