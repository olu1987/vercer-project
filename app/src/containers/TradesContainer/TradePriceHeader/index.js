import PropTypes from 'prop-types';
import numeral from 'numeral';

import { tradesDataFields } from '../../../constants/trades-data';

import {
  WrapperStyled,
  HeaderStyled,
  DataStyled,
  LabelStyled,
  ValueStyled
} from './style';

const TradePriceHeader = ({
  totalTradePrice,
  dataLength
}) => (
  <WrapperStyled>
    <HeaderStyled>
      {tradesDataFields.TRADE_PRICE.label}
    </HeaderStyled>
    <DataStyled>
      <LabelStyled>
        {`${tradesDataFields.TOTAL}:`}
      </LabelStyled>
      <ValueStyled>
        {numeral(totalTradePrice).format('0,0.000')}
      </ValueStyled>
      <LabelStyled>
        {`${tradesDataFields.AVERAGE}:`}
      </LabelStyled>
      <ValueStyled>
        {numeral(totalTradePrice/dataLength).format('0,0.000')}
      </ValueStyled>
    </DataStyled>
  </WrapperStyled>
);

TradePriceHeader.propTypes = {
  totalTradePrice: PropTypes.number,
  dataLength: PropTypes.number
};

TradePriceHeader.defaultProps = {
  totalTradePrice: 0,
  dataLength: 0,
};

export default TradePriceHeader;