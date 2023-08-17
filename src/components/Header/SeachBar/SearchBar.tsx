import { useState } from 'react';
import { SearchBarWrapper, SearchIcon } from './SearchBar.styled';

function SearchBar() {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <SearchBarWrapper isFocus={isFocus}>
      <input
        type="text"
        placeholder="Find the items you're looking for"
        onChange={() => console.log('test')}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <SearchIcon size={25} />
    </SearchBarWrapper>
  );
}

export default SearchBar;
