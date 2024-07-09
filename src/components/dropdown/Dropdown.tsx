import React, { ChangeEvent, useEffect, useState } from 'react';
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
  initialSelectedOption?: OptionType | null;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isInputEnabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  initialSelectedOption,
  placeholderText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  useEffect(() => {
    setSelectedOption(initialSelectedOption || null);
  }, [initialSelectedOption]);

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
        {selectedOption ? selectedOption.label : placeholderText}
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
          <StyledDropdownItem
            onClick={(event) =>
              handleSelectOption({ id: -1, label: '직접 입력' }, event)
            }
          >
            직접 입력
          </StyledDropdownItem>
        </StyledDropdownList>
      )}
    </StyledDropdownContainer>
  );
};

export default Dropdown;
