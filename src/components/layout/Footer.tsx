import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright ⓒ Wikied. All Rights Reserved</p>
      <StyledUl>
        <li>사업자등록번호 000-00-00000</li>
        <li>통신판매신고 제2020-서울-00000호</li>
        <li>대표 : 이지은</li>
        <li>서울특별시 중구 청계천로 123, 위키드빌딩</li>
      </StyledUl>
      <ul>
        <li>서비스 이용약관</li>
        <li>개인정보 취급방침</li>
        <li>전자금융거래 기본약관</li>
      </ul>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 40px;
  color: ${theme.colors.gray[0]};
  background-color: ${theme.colors.gray[900]};
  font-size: ${theme.fonts['pretendard/lg-16px-bold']};
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      font-size: ${theme.fonts['pretendard/md-14px-semibold']};
    }
    &:last-child {
      gap: 20px;
    }
  }
  ${media('tablet')`
  padding: 20px;
line-height:2;
  `}
`;

const StyledUl = styled.ul`
  li {
    padding: 10px 0 20px 0;
    &::after {
      padding: 0 10px;
      content: '|';
      margin-left: 5px;
      margin-right: 5px;
      color: #fff;
    }
    &:last-child::after {
      content: '';
    }
    ${media('tablet')`
padding:0;
  `}
  }
`;

export default Footer;
