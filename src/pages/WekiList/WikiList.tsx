import { Helmet } from 'react-helmet-async';
import WekiListContainer from './components/WekiListContainer';

const WikiList = () => {
  return (
    <>
      <Helmet>
        <title>Wikied - 위키리스트</title>
        <meta
          name="description"
          content="전체 위키 리스트, 위키리스트 바로가기"
        />
        <meta name="keywords" content="위키드, 나만의 위키, 위키 커뮤니티" />
      </Helmet>
      <WekiListContainer />
    </>
  );
};

export default WikiList;
