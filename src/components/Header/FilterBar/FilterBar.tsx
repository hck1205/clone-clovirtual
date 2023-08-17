import FilterRadioBox from '../RadioBox/RadioBox';
import { FilterBarWrapper, ResetIcon } from './FilterBar.styled';

function FilterBar() {
  return (
    <FilterBarWrapper>
      <div className="left">
        <FilterRadioBox />
      </div>

      <div className="right">
        <ResetIcon size={12} />
        <h3>RESET</h3>
      </div>
    </FilterBarWrapper>
  );
}

export default FilterBar;
