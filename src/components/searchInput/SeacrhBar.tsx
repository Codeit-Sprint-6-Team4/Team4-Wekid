import React from 'react';
import SearchIcon from '@assets/icons/icon-search.svg';
import {
  StyledSeacrhInputConatiner,
  StyledSeacrhInput,
  StyledSearchImg,
} from './searchInput';

interface seacrhBarProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SeacrhBar = ({ placeholder, value, onChange }: seacrhBarProps) => {
  return (
    <StyledSeacrhInputConatiner>
      <StyledSearchImg src={SearchIcon} alt="돋보기아이콘" />
      <StyledSeacrhInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledSeacrhInputConatiner>
  );
};

export default SeacrhBar;
