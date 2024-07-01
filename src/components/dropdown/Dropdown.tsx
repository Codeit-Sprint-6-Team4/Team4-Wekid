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
  onSelect: (option: OptionType) => void;
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: OptionType) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <StyledDropdownContainer>
      <StyledDropdownButton $isOpen={isOpen} onClick={toggleDropdown}>
        {placeholderText}
        <div className="icon" />
      </StyledDropdownButton>
      {isOpen && (
        <StyledDropdownList>
          {options.map((option) => (
            <StyledDropdownItem
              key={option.id}
              onClick={() => handleSelectOption(option)}
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
