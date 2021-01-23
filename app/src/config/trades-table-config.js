import numeral from 'numeral';
import moment from 'moment';
import { tradesDataFields } from '../constants/trades-data';

const numberValueFormatter = params => numeral(params.value).format('0,0.00');

export const tradesTableColumns = [
  {
    headerName: tradesDataFields.BOOK_NAME.label,
    field: tradesDataFields.BOOK_NAME.value,
    width: 110
  },
  {
    headerName: tradesDataFields.CANCELLED.label,
    field: tradesDataFields.CANCELLED.value,
    width: 95
  },
  {
    headerName: tradesDataFields.END_DATE.label,
    field: tradesDataFields.END_DATE.value,
    width: 120
  },
  {
    headerName: tradesDataFields.MATCHED.label,
    field: tradesDataFields.MATCHED.value,
    width: 95
  },
  {
    headerName: tradesDataFields.PRODUCT_NAME.label,
    field: tradesDataFields.PRODUCT_NAME.value,
  },
  {
    headerName: tradesDataFields.SIDE.label,
    field: tradesDataFields.SIDE.value,
    width: 95
  },
  {
    headerName: tradesDataFields.START_DATE.label,
    field: tradesDataFields.START_DATE.value,
    width: 115
  },
  {
    headerName: tradesDataFields.TIME_CREATED.label,
    field: tradesDataFields.TIME_CREATED.value,
    valueFormatter: params => moment(params.value).format('DD MMM YYYY HH:mm:ss')
  },
  {
    headerName: tradesDataFields.TRADE_DATE.label,
    field: tradesDataFields.TRADE_DATE.value,
    width: 115
  },
  {
    headerName: tradesDataFields.TRADE_DISPLAY_VOLUME.label,
    field: tradesDataFields.TRADE_DISPLAY_VOLUME.value,
    valueFormatter: numberValueFormatter,
    width: 170
  },
  {
    headerName: tradesDataFields.TRADE_PRICE.label,
    field: tradesDataFields.TRADE_PRICE.value,
    valueFormatter: numberValueFormatter,
    width: 140
  },
];