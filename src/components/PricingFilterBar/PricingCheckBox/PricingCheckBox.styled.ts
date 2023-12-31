import styled from 'styled-components';

export const PricingCheckBoxContainer = styled.div`
  display: flex;
  gap: 15px;

  label {
    display: flex;
    align-items: center;
  }

  input[type='checkbox'] {
    margin-right: 8px;
    accent-color: #42cddd;
  }
`;
