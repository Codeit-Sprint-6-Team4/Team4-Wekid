import React, { useState } from 'react';
import { InputStyled } from './input';
import { ProfileNameStyled, ProfileFrameStyled } from './inputProfileFrame';

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
    <ProfileFrameStyled>
      <ProfileNameStyled>{name}</ProfileNameStyled>
      <InputStyled
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </ProfileFrameStyled>
  );
};

export default InputProfile;
