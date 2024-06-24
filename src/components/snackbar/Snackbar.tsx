import SnackbarContainer from './SnackbarContainer';

interface SnackbarProps {
  type: 'info' | 'success' | 'error';
  visible: boolean;
}

const messages = {
  info: '앞 사람의 편집이 끝나면 위키 참여가 가능합니다.',
  success: '내 위키 링크가 복사되었습니다.',
  error: '다른 친구가 편집하고 있어요. 나중에 다시 시도해 주세요.',
};

const Snackbar: React.FC<SnackbarProps> = ({ type, visible }) => {
  const message = messages[type];
  return <SnackbarContainer message={message} type={type} visible={visible} />;
};

export default Snackbar;
