import styled, { css } from 'styled-components';
import { media } from '@utils/media';

interface ButtonProps {
  $primary?: boolean;
  $secondary?: boolean;
  $loading?: boolean;
  $width?: string;
  $height?: string;
  $mobileWidth?: string;
}

const StyledButton = styled.button<ButtonProps>`
  width: ${({ $width: width }) => width || '120px'};
  height: ${({ $height: height }) => height || '40px'};
  border-radius: 10px;
  border: none;
  font: ${(props) => props.theme.fonts['pretendard/lg-14px-semibold']};

  ${(props) =>
    props.$primary &&
    css`
      background-color: ${props.theme.colors.main[500]};
      color: ${props.theme.colors.gray[0]};
      &:disabled {
        background-color: ${props.theme.colors.gray[300]};
      }
    `}

  ${(props) =>
    props.$secondary &&
    css`
      background-color: transparent;
      color: ${props.theme.colors.main[500]};
      border: 1px solid ${props.theme.colors.main[500]};
      &:disabled {
        color: ${props.theme.colors.gray[300]};
        border-color: ${props.theme.colors.gray[300]};
      }
    `}

  ${(props) =>
    props.$loading &&
    css`
      background-color: ${props.theme.colors.gray[300]};
      color: ${props.theme.colors.gray[0]};
      cursor: not-allowed;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
    
    ${(props) =>
    props.$mobileWidth &&
    media('mobile')`
    width: ${props.$mobileWidth};
  `}
`;

const StyledDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  span {
    width: 4px;
    height: 4px;
    background-color: ${(props) => props.theme.colors.gray[0]};
    border-radius: 50%;
    margin-right: 4px;

    &:nth-child(1) {
      opacity: 0.5;
    }
    &:nth-child(2) {
      opacity: 0.75;
    }
    &:nth-child(3) {
      opacity: 1;
    }
  }
`;

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  $primary,
  $secondary,
  $loading,
  $width,
  $height,
  $mobileWidth,
  ...props
}) => (
  <StyledButton
    $primary={$primary}
    $secondary={$secondary}
    $loading={$loading}
    $width={$width}
    $height={$height}
    $mobileWidth={$mobileWidth}
    {...props}
  >
    {$loading ? (
      <>
        <span>편집 중</span>
        <StyledDots>
          <span></span>
          <span></span>
          <span></span>
        </StyledDots>
      </>
    ) : (
      children
    )}
  </StyledButton>
);

export default Button;
