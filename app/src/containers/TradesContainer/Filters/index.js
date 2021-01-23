import PropTypes from 'prop-types';
import Select from 'react-select';
import Toggle from 'react-toggle';

import { tradesDataFields } from '../../../constants/trades-data';

import {
  FiltersRowStyled,
  SelectWrapperStyled,
  ToggleLabelStyled,
  FilterLabelStyled,
  ToggleWrapperStyled
} from '../style';

const Filters = ({
  productNameOptions,
  brokerNameOptions,
  tradePriceOptions,
  selectedProductName,
  selectedBrokerName,
  isSellMode,
  minTradePrice,
  maxTradePrice,
  onProductNameChange,
  onBrokerNameChange,
  onToggleChange,
  onMinTradePriceChange,
  onMaxTradePriceChange
}) => (
  <FiltersRowStyled>
    <SelectWrapperStyled>
      <FilterLabelStyled>{tradesDataFields.PRODUCT_NAME.label}</FilterLabelStyled>
      <Select
        options={productNameOptions}
        value={selectedProductName}
        onChange={onProductNameChange}
        isClearable
      />
    </SelectWrapperStyled>
    <SelectWrapperStyled>
      <FilterLabelStyled>{tradesDataFields.BROKER_NAME.label}</FilterLabelStyled>
      <Select
        options={brokerNameOptions}
        value={selectedBrokerName}
        onChange={onBrokerNameChange}
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
        onChange={onMinTradePriceChange}
        isClearable
      />
    </SelectWrapperStyled>
    <SelectWrapperStyled>
      <FilterLabelStyled>{tradesDataFields.MAX_TRADE_PRICE}</FilterLabelStyled>
      <Select
        options={tradePriceOptions}
        value={maxTradePrice}
        onChange={onMaxTradePriceChange}
        isClearable
      />
    </SelectWrapperStyled>
  </FiltersRowStyled>
);

Filters.propTypes = {
  productNameOptions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  brokerNameOptions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  tradePriceOptions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  selectedProductName: PropTypes.objectOf(PropTypes.any),
  selectedBrokerName: PropTypes.objectOf(PropTypes.any),
  isSellMode: PropTypes.bool,
  minTradePrice: PropTypes.objectOf(PropTypes.any),
  maxTradePrice: PropTypes.objectOf(PropTypes.any),
  onProductNameChange: PropTypes.func,
  onBrokerNameChange: PropTypes.func,
  onToggleChange: PropTypes.func,
  onMinTradePriceChange: PropTypes.func,
  onMaxTradePriceChange: PropTypes.func
};

Filters.defaultProps = {
  productNameOptions: [],
  brokerNameOptions: [],
  tradePriceOptions: [],
  selectedProductName: null,
  selectedBrokerName: null,
  isSellMode: PropTypes.bool,
  minTradePrice: null,
  maxTradePrice: null,
  onProductNameChange: () => {},
  onBrokerNameChange: () => {},
  onToggleChange: () => {},
  onMinTradePriceChange: () => {},
  onMaxTradePriceChange: () => {}
};

export default Filters;