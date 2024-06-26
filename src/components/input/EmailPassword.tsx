import React from 'react';
import {
  StyledEmailPasswordFrame,
  StyledEmailPasswordName,
} from './emailPasswordFrame';
import { StyledInput } from './input';

interface EmailPasswordProps {
  type: React.HTMLInputTypeAttribute;
  inputName?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailPassword = ({
  inputName,
  name,
  placeholder,
  value,
  onChange,
  type,
}: EmailPasswordProps) => {
  return (
    <StyledEmailPasswordFrame>
      <StyledEmailPasswordName>{name}</StyledEmailPasswordName>
      <StyledInput
        type={type}
        name={inputName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledEmailPasswordFrame>
  );
};

export default EmailPassword;
