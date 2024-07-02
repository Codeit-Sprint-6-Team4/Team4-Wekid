import { StyledButton, StyledDots } from '@components/button/Button.styled';

export interface ButtonProps {
  $primary?: boolean;
  $secondary?: boolean;
  $loading?: boolean;
  $mainGray?: boolean;
  $mainWhite?: boolean;
  $width?: string;
  $height?: string;
  $mobileWidth?: string;
  $mobileHeight?: string;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  $primary,
  $secondary,
  $loading,
  $mainGray,
  $mainWhite,
  $width,
  $height,
  $mobileWidth,
  $mobileHeight,
  ...props
}) => (
  <StyledButton
    $primary={$primary}
    $secondary={$secondary}
    $loading={$loading}
    $mainGray={$mainGray}
    $mainWhite={$mainWhite}
    $width={$width}
    $height={$height}
    $mobileWidth={$mobileWidth}
    $mobileHeight={$mobileHeight}
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
