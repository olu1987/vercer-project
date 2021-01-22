import { AgGridReact } from 'ag-grid-react';
import Select from 'react-select';
import Toggle from 'react-toggle'

import { tradesTableColumns } from '../../config/trades-table-config';
import { useTradesContainer } from './hooks/use-trades-container';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { TableWrapperStyled, FiltersRowStyled, SelectWrapperStyled } from './style';


const TradesContainer = () => {
  const {
    tradesData,
    productNameOptions,
    brokerNameOptions
  } = useTradesContainer();
  return (
    <TableWrapperStyled  className="ag-theme-balham">
      <FiltersRowStyled>
        <SelectWrapperStyled>
          <Select
            options={productNameOptions}
            isClearable
          />
        </SelectWrapperStyled>
        <SelectWrapperStyled>
          <Select
            options={brokerNameOptions}
            isClearable
          />
        </SelectWrapperStyled>
        <label>
          <span>Buy</span>
          <Toggle
            defaultChecked
            icons={false}
            onChange={() => {}} />
          <span>Sell</span>
        </label>
      </FiltersRowStyled>
      <AgGridReact
        columnDefs={tradesTableColumns}
        rowData={tradesData}
        headerHeight={50}
        rowHeight={40}
        defaultColDef={{
          resizable: true
        }}
      />
    </TableWrapperStyled>
  );
}

export default TradesContainer;