import styled from 'styled-components';
import { media } from '@utils/media';

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6rem;
  ${media('tablet')`
    gap: 4rem;
  `}
  ${media('mobile')`
     gap: 3.5rem;
  `}
`;
