import { Helmet } from 'react-helmet-async';
import SignUpContainer from './components/SignUpContainer';

const SignUp = () => {
  return (
    <>
      <Helmet>
        <title>Wikied - 회원가입</title>
        <meta
          name="description"
          content="위키드에 회원가입하고 다양한 서비스를 이용해 보세요. 회원가입 바로가기"
        />
        <meta name="keywords" content="위키드, 나만의 위키, 위키 커뮤니티" />
      </Helmet>
      <SignUpContainer />
    </>
  );
};

export default SignUp;
