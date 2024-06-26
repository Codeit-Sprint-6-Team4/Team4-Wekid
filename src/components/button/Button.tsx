import { StyledButton, StyledDots } from './ButtonFrame';

export interface ButtonProps {
  $primary?: boolean;
  $secondary?: boolean;
  $loading?: boolean;
  $width?: string;
  $height?: string;
  $mobileWidth?: string;
}

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
