import styled from 'styled-components';
import { MdRefresh } from 'react-icons/md';

export const PricingFilterBarWrapper = styled.div`
  margin-top: 16px;
  padding: 0 24px;
  background-color: #121215;
  border-radius: 3px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    height: 68px;
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: #686868eb;
    }
  }
`;

export const ResetIcon = styled(MdRefresh)`
  fill: #fff;
  color: #fff;
  margin-right: 5px;
`;
