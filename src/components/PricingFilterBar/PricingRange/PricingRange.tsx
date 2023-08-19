import { useState, ChangeEvent } from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { RangeContainer } from './PricingRange.styled';

const MAX_VALUE = 999;
const MIN_VALUE = 0;

const PricingRange = () => {
  const [minValue, setMinValue] = useState(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.replace(/\D/g, '');
    if (Number(newValue) > MAX_VALUE) {
      newValue = newValue.slice(0, 3);
    }

    setMinValue(Number(newValue));
  };

  return (
    <RangeContainer>
      <div className="pricing-box">
        <input
          type="text"
          value={`$${minValue}`}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
      </div>

      <Slider
        range
        className="range-slider"
        min={0}
        max={999}
        defaultValue={[0, 999]}
      />

      <div className="pricing-box">
        <input
          type="text"
          value={`$${minValue}`}
          onChange={handleInputChange}
          placeholder="Enter a number"
        />
      </div>
    </RangeContainer>
  );
};

export default PricingRange;
