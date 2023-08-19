import { usePricingFilterWrite } from '@/atoms/pricingFilterAtom';
import PricingCheckBox from './PricingCheckBox';
import PricingRange from './PricingRange';

import { PricingFilterBarWrapper, ResetIcon } from './PricingFilterBar.styled';
import { useKeywordFilterWrite } from '@/atoms/keywordFilterAtom';
import { useSortingWrite } from '@/atoms/sortingAtom';
import { usePricingRangeFilterWrite } from '@/atoms/pricingRangeFilterAtom';
import { PRICING_RANGES } from '@/constpack';

function PricingFilterBar() {
  const setPricingFilter = usePricingFilterWrite();
  const setKeyword = useKeywordFilterWrite();
  const setSorting = useSortingWrite();
  const setPricingRange = usePricingRangeFilterWrite();

  return (
    <PricingFilterBarWrapper>
      <div className="left">
        <PricingCheckBox />
        <PricingRange />
      </div>

      <div
        className="right"
        onClick={() => {
          setPricingFilter([]);
          setKeyword('');
          setSorting(0);
          setPricingRange(PRICING_RANGES);
        }}
      >
        <ResetIcon size={12} />
        <h3>RESET</h3>
      </div>
    </PricingFilterBarWrapper>
  );
}

export default PricingFilterBar;
