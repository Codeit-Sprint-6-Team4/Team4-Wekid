import React from 'react';
import {
  EmailPasswordFrameStyled,
  EmailPasswordNameStyled,
} from './emailPasswordFrame';
import { InputStyled } from './input';

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
    <EmailPasswordFrameStyled>
      <EmailPasswordNameStyled>{name}</EmailPasswordNameStyled>
      <InputStyled
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </EmailPasswordFrameStyled>
  );
};

export default EmailPassword;
