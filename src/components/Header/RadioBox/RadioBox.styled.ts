import styled from 'styled-components';

export const FilterRadioBoxContainer = styled.div`
  display: flex;
  gap: 15px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  input[type='checkbox'] {
    margin-right: 8px;
    accent-color: #42cddd;
  }
`;
