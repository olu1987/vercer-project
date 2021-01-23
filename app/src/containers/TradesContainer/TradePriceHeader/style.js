import styled from 'styled-components';
import { BRAND_COLORS } from '../../../constants/colors';

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${BRAND_COLORS.neutral.grey.fill};
`;

export const HeaderStyled = styled.div`
  display: flex;
  flex-shrink: 0;
  font-size: 30px;
  font-weight: bold;
  margin-right: 20px;
`;

export const DataStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  width: 100%;
  margin-top: 5px;
`;

export const LabelStyled = styled.div`
  display: flex;
  color: ${BRAND_COLORS.primary};
  font-weight: bold;
`;

export const ValueStyled = styled.div`
  display: flex;
  margin-right: 15px;
  margin-left: 5px;
  color: ${BRAND_COLORS.neutral.grey.dark};
`;