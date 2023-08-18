import { useState } from 'react';
import { useAtom } from 'jotai';
import { AiFillCaretDown } from 'react-icons/ai';

import { SORTING_TEXT } from '@/constpack';
import { sortingAtom } from '@/atoms/sortingAtom';

import {
  DropdownButton,
  DropdownContent,
  DropdownItem,
  SortByDropdownWrapper,
} from './SortByDropdown.styled';

const SortByDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [sortingValue, setSortingValue] = useAtom(sortingAtom);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (optionValue: number) => {
    setSortingValue(optionValue);
    setIsOpen(false);
  };

  return (
    <SortByDropdownWrapper>
      <DropdownButton onClick={handleDropdownToggle}>
        <div>
          {SORTING_TEXT[sortingValue] || 'Select Option'} <AiFillCaretDown />
        </div>
      </DropdownButton>

      <DropdownContent isOpen={isOpen}>
        {SORTING_TEXT.map((option: string, i: number) => (
          <DropdownItem key={option} onClick={() => handleOptionSelect(i)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownContent>
    </SortByDropdownWrapper>
  );
};

export default SortByDropdown;
