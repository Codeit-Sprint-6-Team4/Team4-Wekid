import styled from 'styled-components';
import linkIcon from '@assets/icons/icon-link-green.svg';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyledUserLink = styled.a`
  display: flex;
  max-width: 400px;
  align-items: center;
  padding: 3px 10px;
  background-color: ${theme.colors.main[50]};
  border-radius: 10px;
  color: ${theme.colors.main[500]};
  font: ${theme.fonts['pretendard/md-14px-regular']};

  span {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &::before {
    content: '';
    flex-shrink: 0;
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 2px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${linkIcon});
  }

  &:hover {
    text-decoration: underline;
  }

  ${media('mobile')`
    max-width: 202px;
    padding: 4px 10px;
    font: ${theme.fonts['pretendard/xs-12px-regular']};

    &::before {
      width: 14px;
      height: 14px;
      margin-right: 1px;
    }
    
    span {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `};
`;
