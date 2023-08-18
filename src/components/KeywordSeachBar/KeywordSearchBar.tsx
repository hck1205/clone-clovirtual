import { ChangeEvent, useState } from 'react';
import { debounce } from '@/utils';
import { useKeywordFilterWrite } from '@/atoms/keywordFilterAtom';

import { SearchBarWrapper, SearchIcon } from './KeywordSearchBar.styled';

function KeywordSearchBar() {
  const [isFocus, setIsFocus] = useState(false);
  const setKeywordFilter = useKeywordFilterWrite();

  return (
    <SearchBarWrapper isFocus={isFocus}>
      <input
        type="text"
        placeholder="Find the items you're looking for"
        onChange={debounce((e: ChangeEvent<HTMLInputElement>) => {
          const keyword = e.target.value;
          setKeywordFilter(keyword);
        }, 500)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <SearchIcon size={25} />
    </SearchBarWrapper>
  );
}

export default KeywordSearchBar;
