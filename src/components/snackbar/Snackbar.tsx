import { SnackbarStyled } from './Sanckbar.styled';

export interface SnackbarContainerProps {
  type: 'info' | 'success' | 'error';
  visible: boolean;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  fadeTime?: number;
}

const messages = {
  info: '앞 사람의 편집이 끝나면 위키 참여가 가능합니다.',
  success: '내 위키 링크가 복사되었습니다.',
  error: '다른 친구가 편집하고 있어요. 나중에 다시 시도해 주세요.',
};

const Snackbar = ({
  type,
  visible,
  position,
  top,
  right,
  bottom,
  left,
}: SnackbarContainerProps) => {
  const message = messages[type];

  return (
    <SnackbarStyled
      type={type}
      visible={visible}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      {message}
    </SnackbarStyled>
  );
};

export default Snackbar;
