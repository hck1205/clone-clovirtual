import { BREAK_POINT } from '@/constpack/designs';
import styled from 'styled-components';

export const StorePageWrapper = styled.div`
  background-color: #1a1a1f;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  .spinner-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const GridWrapper = styled.div`
  gap: 24px;
  display: grid;
  padding: 0 40px;
  grid-template-columns: repeat(4, minmax(100px, auto));

  @media (max-width: ${BREAK_POINT.BIG_DEVICE}) {
    grid-template-columns: repeat(3, minmax(100px, auto));
  }
  @media (max-width: ${BREAK_POINT.TABLET}) {
    grid-template-columns: repeat(2, minmax(100px, auto));
  }
  @media (max-width: ${BREAK_POINT.MOBILE}) {
    grid-template-columns: repeat(1, minmax(100px, auto));
  }
`;
