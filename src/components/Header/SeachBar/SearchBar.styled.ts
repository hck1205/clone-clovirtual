import styled, { css } from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const SearchBarWrapper = styled.div<{ isFocus: boolean }>`
  display: flex;
  align-items: center;
  background-color: #202025;
  border-radius: 10px;
  padding: 24px;
  display: relative;
  margin: 40px 40px 0 40px;

  ${({ isFocus }) =>
    isFocus &&
    css`
      border: 1px solid #b3f7ff;
    `}

  input {
    border: none;
    outline: none;
    flex: 1;
    height: 32px;
  }

  input[type='text'] {
    background-color: #202025;
    font-size: 1.8rem;
    color: #fff;
  }
`;

export const SearchIcon = styled(BiSearch)`
  fill: #fff;
`;
