import styled from 'styled-components';

export const HeaderWrapper = styled.div``;

export const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 48px;
  background-color: #121215;

  img {
    width: 32px;
    height: 26px;
  }

  .right-wrapper {
    svg {
      fill: #fff;

      &:first-child {
        padding: 0 24px;
      }
    }
  }
`;
