import styled from "styled-components";

export const TooltipContainer = styled.div<{ leftPos: number }>`
  position: relative;

  .tooltip {
    position: absolute;
    background-color: #333;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    font-size: 14px;
    white-space: nowrap;
    z-index: 1;
    top: 15px;
    left: ${({ leftPos }) => leftPos}%;
    transform: translateX(-50%);
  }
`;
