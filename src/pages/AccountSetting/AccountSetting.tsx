import { StyledAccountSettingWrap } from './components/AccountSettingUI.styled';
import PasswordChangeContainer from './components/PasswordChangeContainer';
import SecurityQuestionContainer from './components/SecurityQuestionContainer';

const AccountSetting = () => {
  return (
    <>
      <StyledAccountSettingWrap>
        <PasswordChangeContainer />
        <SecurityQuestionContainer />
      </StyledAccountSettingWrap>
    </>
  );
};

export default AccountSetting;
