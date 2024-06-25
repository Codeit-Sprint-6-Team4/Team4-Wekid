import React from 'react';
import {
  StyledEmailPasswordFrame,
  StyledEmailPasswordName,
} from './emailPasswordFrame';
import { StyledInput } from './input';

interface EmailPasswordProps {
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent) => void;
}

const EmailPassword = ({
  name,
  placeholder,
  value,
  onChange,
}: EmailPasswordProps) => {
  return (
    <StyledEmailPasswordFrame>
      <StyledEmailPasswordName>{name}</StyledEmailPasswordName>
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledEmailPasswordFrame>
  );
};

export default EmailPassword;
