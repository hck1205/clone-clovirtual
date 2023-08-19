import { usePricingFilterWrite } from '@/atoms/pricingFilterAtom';
import PricingCheckBox from './PricingCheckBox';
import PricingRange from './PricingRange';

import { PricingFilterBarWrapper, ResetIcon } from './PricingFilterBar.styled';

function PricingFilterBar() {
  const setPricingFilter = usePricingFilterWrite();

  return (
    <PricingFilterBarWrapper>
      <div className="left">
        <PricingCheckBox />
        <PricingRange />
      </div>

      <div className="right" onClick={() => setPricingFilter([])}>
        <ResetIcon size={12} />
        <h3>RESET</h3>
      </div>
    </PricingFilterBarWrapper>
  );
}

export default PricingFilterBar;
