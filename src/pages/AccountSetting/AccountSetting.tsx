import { Helmet } from 'react-helmet';
import { StyledAccountSettingWrap } from './components/AccountSettingUI.styled';
import PasswordChangeContainer from './components/PasswordChangeContainer';
import SecurityQuestionContainer from './components/SecurityQuestionContainer';

const AccountSetting = () => {
  return (
    <>
      <Helmet>
        <title>계정설정</title>
        <meta
          name="description"
          content="나의 위키드에서 계정 설정, 질문을 받아보세요. 계정 설정 바로가기"
        />
        <meta name="keywords" content="위키드, 나만의 위키, 위키 커뮤니티" />
      </Helmet>
      <StyledAccountSettingWrap>
        <PasswordChangeContainer />
        <SecurityQuestionContainer />
      </StyledAccountSettingWrap>
    </>
  );
};

export default AccountSetting;
