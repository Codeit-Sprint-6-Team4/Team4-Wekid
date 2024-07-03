import { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomBoardToolBar from './customQuali/CustomBoardToolBar';
import { CUSTUM_ICONS } from './customQuali/quali.styled.icon';
import './customQuali/quill-custom.css';

CUSTUM_ICONS;

interface BoardEditorUIProps {
  value: string;
  onChange: (value: string) => void;
}

const BoardEditorUI = ({ value, onChange }: BoardEditorUIProps) => {
  const modules = useMemo(() => {
    return {
      toolbar: '#toolbar',
    };
  }, []);
  return (
    <>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={onChange}
        placeholder="본문을 입력해주세요"
      />
      <CustomBoardToolBar />
    </>
  );
};

export default BoardEditorUI;
