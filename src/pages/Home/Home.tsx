import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LandImg4 from '@assets/images/bg_list.png';
import LandImg1 from '@assets/images/main-hero-imgae.png';
import LandImg5 from '@assets/images/main-view-image03.png';
import LandImg2 from '@assets/images/main-write-image01.png';
import Button from '@components/button/Button';
//Components
import Grid from '@components/layout/Grid';
import Heading from '@components/texts/Heading';
import Paragraph from '@components/texts/Paragraph';
import { theme } from '@styles/theme';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid bgColor={`${theme.colors.gray[50]}`} align="center">
        <Paragraph
          font={`${theme.fonts['pretendard/4xl-40px-bold']}`}
          color={`${theme.colors.gray[800]}`}
          align="center"
        >
          남들이 만드는
        </Paragraph>
        <Heading
          font={`${theme.fonts['pretendard/5xl-48px-semibold']}`}
          color={`${theme.colors.gray[800]}`}
          align="center"
        >
          나만의 위키
        </Heading>
        <Button
          $primary
          onClick={() => {
            navigate('login');
          }}
        >
          위키 만들기
        </Button>
        <ImgWrap>
          <img src={LandImg1} alt="위키만들기_일러스트" />
        </ImgWrap>
      </Grid>
      <Grid bgColor={`${theme.colors.gray[800]}`}>
        <Divide>
          <Paragraph
            font={`${theme.fonts['pretendard/2xl-24px-semibold']}`}
            color={`${theme.colors.main[500]}`}
          >
            WRITE
          </Paragraph>
          <Heading
            font={`${theme.fonts['pretendard/5xl-48px-semibold']}`}
            color={`${theme.colors.gray[0]}`}
          >
            친구의 위키,
            <br />
            직접 작성해 봐요
          </Heading>
        </Divide>
        <ImgWrap>
          <img src={LandImg2} alt="위키만들기_일러스트" />
        </ImgWrap>
      </Grid>
      <Grid bgColor={`${theme.colors.gray[50]}`}>
        <Paragraph
          font={`${theme.fonts['pretendard/2xl-24px-semibold']}`}
          color={`${theme.colors.main[500]}`}
          align="right"
        >
          SHARE
        </Paragraph>
        <Heading
          font={`${theme.fonts['pretendard/5xl-48px-semibold']}`}
          color={`${theme.colors.gray[900]}`}
          align="left"
        >
          내 위키 만들고
          <br />
          친구에게 공유해요
        </Heading>
      </Grid>
      <ImgWrap>
        <img src={LandImg4} alt="위키만들기_일러스트" />
      </ImgWrap>
      <Grid bgColor={`${theme.colors.gray[100]}`}>
        <Paragraph
          font={`${theme.fonts['pretendard/2xl-24px-semibold']}`}
          color={`${theme.colors.main[500]}`}
        >
          VIEW
        </Paragraph>
        <Heading
          font={`${theme.fonts['pretendard/5xl-48px-semibold']}`}
          color={`${theme.colors.gray[900]}`}
        >
          친구들이 달아준
          <br />
          내용을 확인해 봐요
        </Heading>
        <ImgWrap>
          <img src={LandImg5} alt="위키만들기_일러스트" />
        </ImgWrap>
      </Grid>
    </>
  );
};

const Divide = styled.div`
  position: absolute;
`;

const ImgWrap = styled.div`
  maz-witdh: 100%;
  width: 100%;
  text-align: center;
  img {
    max-width: 100%;
  }
`;

export default Home;
