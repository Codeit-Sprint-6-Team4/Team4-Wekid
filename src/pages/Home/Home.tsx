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
import { theme } from '@styles/theme';
import { media } from '@utils/media';

const Home = () => {
  return (
    <Layout>
      <Grid column="1fr" place="center" bgColor={`${theme.colors.gray[50]}`}>
        <StyledParagraph
          font={theme.fonts['pretendard/3xl-32px-semibold']}
          color={theme.colors.gray[800]}
          align="left"
        >
          남들이 만드는
        </StyledParagraph>
        <StyledHeading
          font={theme.fonts['pretendard/5xl-48px-semibold']}
          color={theme.colors.gray[800]}
          align="left"
        >
          나만의 위키
        </StyledHeading>
        <ImgWrap>
          <img src={LandImg1} alt="위키만들기_일러스트" />
        </ImgWrap>
      </Grid>
      <Grid
        column="1fr 1fr"
        place="start"
        bgColor={`${theme.colors.gray[800]}`}
      >
        <div>
          <StyledParagraph
            font={theme.fonts['pretendard/2xl-24px-bold']}
            color={theme.colors.main[500]}
            align="left"
          >
            WRITE
          </StyledParagraph>
          <StyledHeading
            font={theme.fonts['pretendard/5xl-48px-semibold']}
            color={theme.colors.gray[0]}
            align="left"
          >
            친구의 위키,
            <br />
            직접 작성해 봐요
          </StyledHeading>
          <img src={LandImg2} alt="위키만들기_일러스트" />
        </div>
        <ImgWrap>
          <img src={LandImg3} alt="위키만들기_일러스트" />
        </ImgWrap>
      </Grid>
      <Grid column="1fr" place="end" bgColor={`${theme.colors.gray[50]}`}>
        <StyledParagraph
          font={theme.fonts['pretendard/2xl-24px-bold']}
          color={theme.colors.main[500]}
          align="right"
        >
          SHARE
        </StyledParagraph>
        <StyledHeading
          font={theme.fonts['pretendard/5xl-48px-semibold']}
          color={theme.colors.gray[900]}
          align="right"
        >
          내 위키 만들고
          <br />
          친구에게 공유해요
        </StyledHeading>
      </Grid>
      <ImgWrap>
        <img src={LandImg4} alt="위키만들기_일러스트" />
      </ImgWrap>
      <Grid column="1fr" place="start" bgColor={`${theme.colors.gray[100]}`}>
        <StyledParagraph
          font={theme.fonts['pretendard/2xl-24px-bold']}
          color={theme.colors.main[500]}
        >
          VIEW
        </StyledParagraph>
        <StyledHeading
          font={theme.fonts['pretendard/5xl-48px-semibold']}
          color={theme.colors.gray[900]}
        >
          친구들이 달아준
          <br />
          내용을 확인해 봐요
        </StyledHeading>
        <ImgWrap>
          <img src={LandImg5} alt="위키만들기_일러스트" />
        </ImgWrap>
      </Grid>
    </Layout>
  );
};

interface StyledHeadingProps {
  font?: string;
  color?: string;
  align?: string;
}

const StyledHeading = styled.h2<StyledHeadingProps>`
  font: ${(props) => props.font || 'pretendard/lg-16px-medium'};
  color: ${(props) => props.color || '#000'};
  text-align: ${(props) => props.align || 'left'};
  line-height: 1.2;

  ${media('tablet')`font:${theme.fonts['pretendard/3xl-32px-bold']};`}
`;

interface StyledPragraphProps {
  font?: string;
  color?: string;
  align?: string;
}

const StyledParagraph = styled.p<StyledPragraphProps>`
  font: ${(props) => props.font || 'pretendard/lg-16px-medium'};
  color: ${(props) => props.color || '#000'};
  text-align: ${(props) => props.align || 'left'};
  ${media('tablet')`font:${theme.fonts['pretendard/2lg-18px-bold']};`}
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
