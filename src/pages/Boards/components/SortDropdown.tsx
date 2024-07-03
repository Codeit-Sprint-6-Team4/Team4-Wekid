import React, { useState } from 'react';
import {
  StyledDropdownButton,
  StyledDropdownContainer,
  StyledDropdownItem,
  StyledDropdownList,
} from '@pages/Boards/components/SortDropdown.styled';

interface OptionType {
  id: number;
  label: string;
}

interface DropdownProps {
  options: OptionType[];
  onSelect: (option: OptionType) => void;
}

const SortDropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    options[0],
  );

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
        {selectedOption?.label}
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

export default SortDropdown;
