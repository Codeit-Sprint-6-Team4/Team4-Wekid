import styled from 'styled-components';
import { StyledInput } from '@components/input/input';

export const StyledSeacrhInputConatiner = styled.div`
  position: relative;
`;

export const StyledSeacrhInput = styled(StyledInput)`
  width: 100%;
  height: 45px;
  padding-left: 40px;
`;

export const StyledSearchImg = styled.img`
  position: absolute;
  top: 10px;
  left: 12px;
  width: 22px;
  height: 22px;
`;
