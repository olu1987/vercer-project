import styled from 'styled-components';
import { BRAND_COLORS } from '../../constants/colors';

export const MainWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

export const customScrollBarStyles = `*::-webkit-scrollbar {
  background-color:#fff;
  width:16px
}
*::-webkit-scrollbar-track {
  background-color:#fff
}
*::-webkit-scrollbar-track:hover {
  background-color:#f4f4f4
}

*::-webkit-scrollbar-thumb {
  background-color:#babac0;
  border-radius:16px;
  border:5px solid #fff
}
*::-webkit-scrollbar-thumb:hover {
  background-color:#a0a0a5;
  border:4px solid #f4f4f4
}

*::-webkit-scrollbar-button { display:none }  `

export const TableWrapperStyled = styled.div`
  height: 100%;
  width: 100%;

  &&.ag-theme-balham {
    .ag-header {
      border-color: ${BRAND_COLORS.neutral.grey.fill};
    }
    .ag-root {
      border-color: #fff;
    }
    .ag-horizontal-left-spacer {
      opacity: 0;
    }
    .ag-header-viewport {
      background: #fff;
    }
    .ag-header-row {
      height: 100%;
    }
    .ag-header-cell {
      background: #fff;
      color: ${BRAND_COLORS.neutral.blue.tertiary};
      border-color: ${BRAND_COLORS.neutral.grey.fill};
      font-size: 14px;

      &::after {
        top: 10px;
      }
    }
    .ag-row {
      border-color: #E6E9F0;
      background: #fff;
  
      &.ag-row-hover {
        background-color: ${BRAND_COLORS.neutral.blue.hover};
      }
  
      &.ag-row-selected {
        background-color: ${BRAND_COLORS.neutral.blue.secondarySelect};
      }
  
      .ag-cell {
        display: flex;
        align-items: center;
        font-size: 14px;
        color: ${BRAND_COLORS.neutral.blue.tertiary};
      }
    } 
  }
  ${customScrollBarStyles} 
`;

export const FiltersRowStyled = styled.div`
   display: flex;
   padding-bottom: 10px;
`;

export const SelectWrapperStyled = styled.div`
  width: 250px;
  margin-right: 20px;
  font-size: 14px;
`;

export const FilterLabelStyled = styled.label`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
`;

export const ToggleLabelStyled = styled.label`
  display: flex;
  align-items: center;
`;

export const ToggleWrapperStyled = styled.label`
  display: flex;
  align-items: center;

  .react-toggle {
    margin: 0 10px;
  }
`;

