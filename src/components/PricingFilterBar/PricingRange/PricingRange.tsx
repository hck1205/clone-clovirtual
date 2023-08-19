import { useState, ChangeEvent, useMemo } from "react";
import Slider from "rc-slider";

import { usePricingRangeFilterWrite } from "@/atoms/pricingRangeFilterAtom";
import WithTooltip from "@/components/DotTooltip/DotTooltip";
import { PRICING_RANGES } from "@/constpack";

import { RangeContainer } from "./PricingRange.styled";
import "rc-slider/assets/index.css";
import { usePricingFilterValue } from "@/atoms/pricingFilterAtom";

const [MIN_VALUE, MAX_VALUE] = PRICING_RANGES;

const PricingRange = () => {
  const [minValue, setMinValue] = useState(MIN_VALUE);
  const [maxValue, setMaxValue] = useState(MAX_VALUE);

  const pricingFilterOptions = usePricingFilterValue();
  const setPricingRange = usePricingRangeFilterWrite();

  const disabled = useMemo(
    () => !pricingFilterOptions.includes(0),
    [pricingFilterOptions]
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isMinValue = e.target.id === "min";
    let newValue = e.target.value.replace(/\D/g, "");

    if (Number(newValue) > MAX_VALUE) {
      newValue = newValue.slice(0, 3);
    }

    const updatedValue = Number(newValue);
    if (isMinValue && updatedValue > maxValue) {
      return;
    }
    if (!isMinValue && updatedValue < minValue) {
      return;
    }
    const updateValue = isMinValue ? setMinValue : setMaxValue;
    updateValue(updatedValue);
  };

  return (
    <RangeContainer disabled={disabled}>
      <div className="pricing-box">
        <input
          id="min"
          type="text"
          value={`$ ${minValue}`}
          onChange={handleInputChange}
          placeholder="Enter a number"
          disabled={disabled}
        />
      </div>

      <Slider
        range
        disabled={disabled}
        className="range-slider"
        min={MIN_VALUE}
        max={MAX_VALUE}
        value={[minValue, maxValue]}
        onChange={(ranges) => {
          const [minValue, maxValue] = ranges as number[];
          setMinValue(minValue);
          setMaxValue(maxValue);
        }}
        onAfterChange={(ranges) => setPricingRange(ranges as number[])}
        allowCross={false}
        handleRender={(dom, info) => {
          const { dragging, value } = info;
          const { style } = dom.props;

          const leftPos = (style?.left || "0") as string;

          return (
            <WithTooltip
              content={`$ ${value}`}
              show={dragging}
              leftPos={parseInt(leftPos)}
            >
              {dom}
            </WithTooltip>
          );
        }}
      />

      <div className="pricing-box">
        <input
          id="max"
          type="text"
          value={`$ ${maxValue}`}
          onChange={handleInputChange}
          placeholder="Enter a number"
          disabled={disabled}
        />
      </div>
    </RangeContainer>
  );
};

export default PricingRange;
