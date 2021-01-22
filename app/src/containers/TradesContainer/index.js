import { TableWrapper } from './style';
import { AgGridReact } from 'ag-grid-react';

import { tradesTableColumns } from '../../config/trades-table-config';
import { useTradesContainer } from './hooks/use-trades-container';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const TradesContainer = () => {
  const { tradesData } = useTradesContainer();
  return (
    <TableWrapper  className="ag-theme-balham">
      <AgGridReact
        columnDefs={tradesTableColumns}
        rowData={tradesData}
        headerHeight={50}
        rowHeight={40}
        defaultColDef={{
          resizable: true
        }}
      />
    </TableWrapper>
  );
}

export default TradesContainer;