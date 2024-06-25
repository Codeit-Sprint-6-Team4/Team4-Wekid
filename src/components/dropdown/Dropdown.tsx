import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowIcon from '@assets/icons/icon-arrow.svg';
import { media } from '@utils/media';

interface OptionType {
  id: number;
  label: string;
}

interface DropdownProps {
  options: OptionType[];
  onSelect: (option: OptionType) => void;
}

const StyledDropdownContainer = styled.div`
  position: relative;
  width: 200px;
`;

const StyledDropdownButton = styled.button<{ $isOpen: boolean }>`
  width: 400px;
  height: 45px;
  padding: 10.5px 20px;
  background-color: ${(props) => props.theme.colors.gray[0]};
  border: none;
  border-radius: 10px;
  font: ${(props) => props.theme.fonts['pretendard/md-14px-regular']};
  color: ${(props) => props.theme.colors.gray[600]};
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:focus {
    outline: none;
  }

  ${({ $isOpen: isOpen, theme }) =>
    isOpen &&
    `
    border: 1px solid ${theme.colors.main[500]};
    `}

  .icon {
    transition: transform 0.3s;
    transform: ${({ $isOpen: isOpen }) =>
      isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    width: 22px;
    height: 22px;
    background-image: url(${ArrowIcon});
    background-size: cover;
  }

  ${media('mobile')`
    width: 335px;
  `}

`;

const StyledDropdownList = styled.ul`
  position: absolute;
  width: 400px;
  padding: 6px 4px;
  margin-top: 5px;
  border: none;
  background-color: ${(props) => props.theme.colors.gray[0]};
  border-radius: 10px;
  z-index: 1000;

  ${media('mobile')`
    width: 335px;
    padding: 6px 3.35px;
  `}
`;

const DropdownItem = styled.li`
  width: 392px;
  height: 35px;
  padding-left: 16px;
  padding-top: 5px;
  font: ${(props) => props.theme.fonts['pretendard/md-14px-regular']};
  color: ${(props) => props.theme.colors.gray[800]};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.main[50]};
  }

  ${media('mobile')`
    width: 328.3px;
  `}
`;

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
            <DropdownItem
              key={option.id}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </StyledDropdownList>
      )}
    </StyledDropdownContainer>
  );
};

export default Dropdown;
