import { ReactNode } from "react";
import { TooltipContainer } from "./DotTooltip.styled";

type TDotTooltip = {
  content: ReactNode;
  children: ReactNode;
  show: boolean;
  leftPos: number;
};

const DotTooltip = ({
  content,
  children,
  show = true,
  leftPos,
}: TDotTooltip) => {
  return (
    <TooltipContainer leftPos={leftPos}>
      {children}
      {show && <div className="tooltip">{content}</div>}
    </TooltipContainer>
  );
};

export default DotTooltip;
