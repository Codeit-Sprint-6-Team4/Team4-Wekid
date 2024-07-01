import React, { useState } from 'react';
import {
  StyledDropdownButton,
  StyledDropdownContainer,
  StyledDropdownItem,
  StyledDropdownList,
} from './DropdownFrame';

interface OptionType {
  id: number;
  label: string;
}

interface DropdownProps {
  options: OptionType[];
  onSelect: (
    option: OptionType,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => void;
  placeholderText: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const placeholderText = isOpen
    ? '질문 선택하기'
    : selectedOption
      ? selectedOption.label
      : '질문 없음';

  const toggleDropdown = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (
    option: OptionType,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    event.preventDefault();
    setSelectedOption(option);
    onSelect(option, event);
    setIsOpen(false);
  };

  return (
    <StyledDropdownContainer>
      <StyledDropdownButton
        $isOpen={isOpen}
        onClick={(event) => toggleDropdown(event)}
      >
        {placeholderText}
        <div className="icon" />
      </StyledDropdownButton>
      {isOpen && (
        <StyledDropdownList>
          {options.map((option) => (
            <StyledDropdownItem
              key={option.id}
              onClick={(event) => handleSelectOption(option, event)}
            >
              {option.label}
            </StyledDropdownItem>
          ))}
        </StyledDropdownList>
      )}
    </StyledDropdownContainer>
  );
};

export default Dropdown;
