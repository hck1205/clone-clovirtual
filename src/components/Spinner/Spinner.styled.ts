import styled from "styled-components";

import type { TSpinner } from "./Spinner";

export const SpinnerComponent = styled.span<TSpinner>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  margin: auto;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
