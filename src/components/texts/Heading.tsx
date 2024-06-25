import React from 'react';
import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

interface StyledHeadingProps {
  font?: string;
  color?: string;
  align?: string;
  children: string;
}

const Heading: React.FC<StyledHeadingProps> = ({
  font,
  color,
  align,
  children,
}) => {
  return (
    <StyledHeading font={font} color={color} align={align}>
      {children}
    </StyledHeading>
  );
};

const StyledHeading = styled.h2<StyledHeadingProps>`
  font: ${(props) => props.font || 'pretendard/lg-16px-medium'};
  color: ${(props) => props.color || '#000'};
  text-align: ${(props) => props.align || 'left'};
  ${media('tablet')`font:${theme.fonts['pretendard/3xl-32px-bold']};`}
`;

export default Heading;
