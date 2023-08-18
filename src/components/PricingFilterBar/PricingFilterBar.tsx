import { usePricingFilterWrite } from '@/atoms/pricingFilterAtom';
import FilterRadioBox from './PricingCheckBox';

import { PricingFilterBarWrapper, ResetIcon } from './PricingFilterBar.styled';

function PricingFilterBar() {
  const setPricingFilter = usePricingFilterWrite();

  return (
    <PricingFilterBarWrapper>
      <div className="left">
        <FilterRadioBox />
      </div>

      <div className="right" onClick={() => setPricingFilter([])}>
        <ResetIcon size={12} />
        <h3>RESET</h3>
      </div>
    </PricingFilterBarWrapper>
  );
}

export default PricingFilterBar;
