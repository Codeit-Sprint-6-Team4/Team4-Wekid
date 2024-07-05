import { Helmet } from 'react-helmet';
//Components
import SignInContainer from '@pages/SignIn/components/SignInContainer';

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>로그인</title>
        <meta
          name="description"
          content="위키드에 로그인하고 다양한 서비스를 이용해 보세요. 로그인 바로가기"
        />
        <meta name="keywords" content="위키드, 나만의 위키, 위키 커뮤니티" />
      </Helmet>
      <SignInContainer />
    </>
  );
};

export default SignIn;
