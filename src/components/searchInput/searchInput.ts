import styled from 'styled-components';
import { StyledInput } from '@components/input/input';
import { media } from '@utils/media';

export const StyledSeacrhInputConatiner = styled.div`
  position: relative;
  flex: 1;
`;

export const StyledSeacrhInput = styled(StyledInput)`
  width: 100%;
  height: 40px;
  padding-left: 40px;
  ${media('tablet')`
    height:42px;
  `}
  ${media('mobile')`
  `}
`;

export const StyledSearchImg = styled.img`
  position: absolute;
  top: 10px;
  left: 12px;
  width: 22px;
  height: 22px;
`;
