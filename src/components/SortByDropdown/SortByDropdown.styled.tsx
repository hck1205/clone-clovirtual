import styled from 'styled-components';

export const SortByDropdownWrapper = styled.div`
  margin: 16px 0;
`;

export const DropdownButton = styled.button`
  display: flex;
  gap: 10px;
  background-color: transparent;
  border-bottom: 1px solid white;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 13px;
  position: relative;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
    width: 120px;
    padding: 5px 0;
  }
`;

export const DropdownContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin: 5px;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: absolute;
  width: 120px;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-size: 13px;
  color: black;

  &:hover {
    background-color: #f1f1f1;
  }
`;
