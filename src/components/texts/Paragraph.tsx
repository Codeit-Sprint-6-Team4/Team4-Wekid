import React from 'react';
import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

interface StyledPragraphProps {
  font?: string;
  align?: string;
  color: string;
  children: string;
}

const Paragraph: React.FC<StyledPragraphProps> = ({
  font,
  color,
  align,
  children,
}) => {
  return (
    <StyledParagraph font={font} color={color} align={align}>
      {children}
    </StyledParagraph>
  );
};

const StyledParagraph = styled.p<StyledPragraphProps>`
  font: ${(props) => props.font || 'pretendard/lg-16px-medium'};
  color: ${(props) => props.color || '#000'};

  text-align: ${(props) => props.align || 'left'};
  ${media('tablet')`font:${theme.fonts['pretendard/2lg-18px-bold']};`}
`;

export default Paragraph;
