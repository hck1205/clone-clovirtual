import { ChangeEvent, useState } from "react";
import { debounce } from "@/utils";
import { keywordFilterAtom } from "@/atoms/keywordFilterAtom";

import { SearchBarWrapper, SearchIcon } from "./KeywordSearchBar.styled";
import { useAtom } from "jotai";

function KeywordSearchBar() {
  const [isFocus, setIsFocus] = useState(false);
  const [keyword, setKeywordFilter] = useAtom(keywordFilterAtom);

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
        defaultValue={keyword}
      />
      <SearchIcon size={25} />
    </SearchBarWrapper>
  );
}

export default KeywordSearchBar;
