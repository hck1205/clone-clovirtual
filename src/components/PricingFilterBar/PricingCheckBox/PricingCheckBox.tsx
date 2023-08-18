import { useAtom } from 'jotai';
import { PRICING_TEXT } from '@/constpack';
import { pricingFilterAtom } from '@/atoms/pricingFilterAtom';

import { PricingCheckBoxContainer } from './PricingCheckBox.styled';

const PricingCheckBox = () => {
  const [pricingFilter, setPricingFilter] = useAtom(pricingFilterAtom);

  const toggleOption = (value: number) => {
    const hasOption = pricingFilter.includes(value);

    if (hasOption) {
      const updatedOption = pricingFilter.filter((o) => o !== value);
      setPricingFilter(updatedOption);
    } else {
      setPricingFilter([...pricingFilter, value]);
    }
  };

  return (
    <PricingCheckBoxContainer>
      {PRICING_TEXT.map((value: string, i: number) => {
        return (
          <label key={value}>
            <input
              type="checkbox"
              value={i}
              checked={pricingFilter.includes(i)}
              onChange={() => toggleOption(i)}
            />
            {value}
          </label>
        );
      })}
    </PricingCheckBoxContainer>
  );
};

export default PricingCheckBox;
