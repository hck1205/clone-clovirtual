import styled from 'styled-components';

export const RangeContainer = styled.div`
  width: 350px;
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .range-slider {
    .rc-slider-handle {
      opacity: 1;
    }
  }

  .pricing-box {
    input {
      width: 50px;
      outline: none;
      padding: 5px;
      border: 1px solid #5f5f68;
      border-radius: 5px;
      text-align: center;

      &:focus {
        border: 1px solid #66f0ff;
      }
    }

    input[type='text'] {
      background-color: #202025;
      font-size: 1.2rem;
      color: #fff;
    }
  }
`;
