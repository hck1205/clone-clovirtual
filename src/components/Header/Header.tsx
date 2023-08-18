import { logoURL } from '@/constpack';

import SearchBar from '@/components/KeywordSeachBar';
import FilterBar from '@/components/PricingFilterBar';
import SortByDropdown from '@/components/SortByDropdown';

import { AiFillBell } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import { HeaderWrapper, TopHeader, FilterContainer } from './Header.styled';

function Header() {
  return (
    <HeaderWrapper>
      <TopHeader>
        <img src={logoURL} alt="Clo Virtual Logo" />
        <div className="right-wrapper">
          <AiFillBell size={24} />
          <GiHamburgerMenu size={24} />
        </div>
      </TopHeader>

      <FilterContainer>
        <SearchBar />
        <FilterBar />
        <div className="sort-container">
          <p>Sort by:</p>
          <SortByDropdown />
        </div>
      </FilterContainer>
    </HeaderWrapper>
  );
}

export default Header;
