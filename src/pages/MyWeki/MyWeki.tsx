import { Helmet } from 'react-helmet-async';
import MyWekiContainer from './components/MyWekiContainer';

const MyWeki = () => {
  return (
    <>
      <Helmet>
        <title>Wikied</title>
        <meta
          name="description"
          content="나의 위키에서 나를 표현하세요. 나의 위키 바로가기"
        />
        <meta name="keywords" content="위키드, 나만의 위키, 위키 커뮤니티" />
      </Helmet>
      <MyWekiContainer />
    </>
  );
};

export default MyWeki;
