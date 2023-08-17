import { logoURL } from '@/constpack';

import SearchBar from './SeachBar/SearchBar';
import FilterBar from './FilterBar/FilterBar';

import { AiFillBell } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import { HeaderWrapper, TopHeader } from './Header.styled';

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

      <SearchBar />
      <FilterBar />
    </HeaderWrapper>
  );
}

export default Header;
