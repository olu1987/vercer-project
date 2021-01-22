import { AgGridReact } from 'ag-grid-react';
import Select from 'react-select';
import Toggle from 'react-toggle'

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
    tradesData,
    productNameOptions,
    brokerNameOptions
  } = useTradesContainer();
  return (
    <MainWrapperStyled>
      <FiltersRowStyled>
        <SelectWrapperStyled>
          <FilterLabelStyled>{tradesDataFields.PRODUCT_NAME.label}</FilterLabelStyled>
          <Select
            options={productNameOptions}
            isClearable
          />
        </SelectWrapperStyled>
        <SelectWrapperStyled>
          <FilterLabelStyled>{tradesDataFields.BROKER_NAME.label}</FilterLabelStyled>
          <Select
            options={brokerNameOptions}
            isClearable
          />
        </SelectWrapperStyled>
        <ToggleLabelStyled>
          <SelectWrapperStyled>
            <FilterLabelStyled>{tradesDataFields.SIDE.label}</FilterLabelStyled>
            <ToggleWrapperStyled>
              <span>{tradesDataFields.SIDE.options.BUY.label}</span>
              <Toggle
                defaultChecked
                icons={false}
                onChange={() => {}} />
              <span>{tradesDataFields.SIDE.options.SELL.label}</span>
            </ToggleWrapperStyled>
          </SelectWrapperStyled>
        </ToggleLabelStyled>
      </FiltersRowStyled>
      <TableWrapperStyled  className="ag-theme-balham">
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
    </MainWrapperStyled>
  );
}

export default TradesContainer;