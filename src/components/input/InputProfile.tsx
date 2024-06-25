import React, { useState } from 'react';
import { StyledInput } from './input';
import { StyledProfileName, StyledProfileFrame } from './inputProfileFrame';

interface inputProfileProps {
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent) => void;
}

const InputProfile = ({
  name,
  placeholder,
  value,
  onChange,
}: inputProfileProps) => {
  return (
    <StyledProfileFrame>
      <StyledProfileName>{name}</StyledProfileName>
      <StyledInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledProfileFrame>
  );
};

export default InputProfile;
