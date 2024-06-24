import React from 'react';
import styled from 'styled-components';
import LandImg1 from '@assets/images/main-hero-imgae.png';
// import LandImg2 from '@assets/images/main-write-image01.png';
// import LandImg3 from '@assets/images/main-write-image02.png';
//Components
import Grid from '@components/layout/Grid';
import Layout from '@components/layout/Layout';
import { theme } from '@styles/theme';

const Home = () => {
  return (
    <Layout>
      <Grid column="1fr" place="center" bgColor={`${theme.colors.gray[50]}`}>
        <BigText>남들이 만드는</BigText>
        <BigText>나만의 위키</BigText>
        <ImgWrap>
          <img src={LandImg1} alt="위키만들기_일러스트" />
        </ImgWrap>
      </Grid>
    </Layout>
  );
};

const BigText = styled.h2`
  font: ${theme.fonts['pretendard/5xl-48px-semibold']};
  color: ${theme.colors.gray[800]};
  text-align: center;
`;

const Paragraph = styled.p`
  font: ${theme.fonts['pretendard/2xl-24px-bold']};
  color: ${theme.colors.gray[50]};
`;

const ImgWrap = styled.div`
  width: 30%;
  img {
    width: 100%;
  }
`;

export default Home;
