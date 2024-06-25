import React from 'react';
import styled from 'styled-components';
import LandImg4 from '@assets/images/bg_list.png';
import LandImg1 from '@assets/images/main-hero-imgae.png';
import LandImg5 from '@assets/images/main-view-image03.png';
import LandImg2 from '@assets/images/main-write-image01.png';
import LandImg3 from '@assets/images/main-write-image02.png';
//Components
import Grid from '@components/layout/Grid';
import Layout from '@components/layout/Layout';
import Heading from '@components/texts/Heading';
import Paragraph from '@components/texts/Paragraph';
import { theme } from '@styles/theme';

const Home = () => {
  return (
    <Layout>
      <Grid bgColor={`${theme.colors.gray[50]}`}>
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
        <ImgWrap>
          <img src={LandImg1} alt="위키만들기_일러스트" />
        </ImgWrap>
      </Grid>
      <Grid bgColor={`${theme.colors.gray[800]}`}>
        <div>
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
            친구의 위키, 직접 작성해 봐요
          </Heading>
          <img src={LandImg2} alt="위키만들기_일러스트" />
        </div>
        <ImgWrap>
          <img src={LandImg3} alt="위키만들기_일러스트" />
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
          align="right"
        >
          내 위키 만들고 친구에게 공유해요
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
          친구들이 달아준 내용을 확인해 봐요
        </Heading>
        <ImgWrap>
          <img src={LandImg5} alt="위키만들기_일러스트" />
        </ImgWrap>
      </Grid>
    </Layout>
  );
};

const ImgWrap = styled.div`
  maz-witdh: 100%;
  width: 100%;
  text-align: center;
  img {
    max-width: 100%;
  }
`;

export default Home;
