import { useState } from 'react';

import { FilterRadioBoxContainer } from './RadioBox.styled';
import { PRICING_TEXT } from '@/constpack';

const FilterRadioBox = () => {
  const [selectedOption, setSelectedOption] = useState<number[]>([]); // Default selection is 'free'

  const toggleOption = (value: number) => {
    const hasOption = selectedOption.includes(value);

    if (hasOption) {
      const updatedOption = selectedOption.filter((o) => o !== value);
      setSelectedOption(updatedOption);
    } else {
      setSelectedOption([...selectedOption, value]);
    }
  };

  return (
    <FilterRadioBoxContainer>
      {PRICING_TEXT.map((value: string, i: number) => {
        return (
          <label key={value}>
            <input
              type="checkbox"
              value={i}
              checked={selectedOption.includes(i)}
              onChange={() => toggleOption(i)}
            />
            {value}
          </label>
        );
      })}
    </FilterRadioBoxContainer>
  );
};

export default FilterRadioBox;
