import React from 'react';
import Button from '@components/button/Button';
import {
  StyledAccountSettingForm,
  StyledAccountSettingTitle,
  StyledPasswordInput,
  StyledButtonContainer,
  StyledErrorMessage,
  StyledInputSubtitle,
} from '@pages/AccountSetting/components/AccountSettingUI.styled';

interface PasswordChangeProps {
  values: {
    currentPassword: string;
    password: string;
    confirmPassword: string;
  };
  errors: {
    passwordMismatch: boolean;
    sameCurrentPassword: boolean;
    incorrectCurrentPassword: boolean;
  };
  isConfirmDisabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const PasswordChangeUI = ({
  values,
  errors,
  isConfirmDisabled,
  onChange,
  onSubmit,
}: PasswordChangeProps) => {
  return (
    <StyledAccountSettingForm onSubmit={onSubmit}>
      <StyledAccountSettingTitle>계정 설정</StyledAccountSettingTitle>
      <StyledInputSubtitle>비밀번호 변경</StyledInputSubtitle>
      <StyledPasswordInput
        type="password"
        name="currentPassword"
        placeholder="기존 비밀번호"
        value={values.currentPassword}
        onChange={onChange}
        $hasError={errors.incorrectCurrentPassword}
      />
      {errors.incorrectCurrentPassword && (
        <StyledErrorMessage>
          기존 비밀번호가 일치하지 않습니다.
        </StyledErrorMessage>
      )}
      <StyledPasswordInput
        type="password"
        name="password"
        placeholder="새 비밀번호"
        value={values.password}
        onChange={onChange}
        $hasError={errors.sameCurrentPassword}
      />
      {errors.sameCurrentPassword && (
        <StyledErrorMessage>
          기존의 비밀번호와 동일합니다. 새로운 비밀번호를 입력해주세요.
        </StyledErrorMessage>
      )}
      <StyledPasswordInput
        type="password"
        name="confirmPassword"
        placeholder="새 비밀번호 확인"
        value={values.confirmPassword}
        onChange={onChange}
        $hasError={errors.passwordMismatch}
      />
      {errors.passwordMismatch && (
        <StyledErrorMessage>
          새 비밀번호가 일치하지 않습니다.
        </StyledErrorMessage>
      )}
      <StyledButtonContainer>
        <Button
          $primary
          $width="89px"
          type="submit"
          disabled={isConfirmDisabled}
        >
          변경하기
        </Button>
      </StyledButtonContainer>
    </StyledAccountSettingForm>
  );
};

export default PasswordChangeUI;
