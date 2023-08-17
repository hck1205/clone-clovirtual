import styled from 'styled-components';

export const ItemWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #343434;

  img {
    width: 100%;
    border-radius: 4px;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  .id-creator {
    h3 {
      font-size: 1.2rem;
      font-weight: 600;
    }

    p {
      color: #bfbfc6;
      font-size: 1.2rem;
      font-weight: 300;
      margin-top: 2px;
    }
  }

  .price {
    font-size: 1.6rem;
    font-weight: 600;
  }
`;
