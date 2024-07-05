import { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { uploadImage } from '@api/image';
import './customQuali/quill-custom.css';
import { CUSTUM_ICONS } from './customQuill/upLoadBoardCustomQuali.styled.icon';
import CustomBoardToolBar from './customQuill/upLoadBoardCustomToolBar';

CUSTUM_ICONS;

interface BoardEditorUIProps {
  value: string;
  onChange: (value: string) => void;
}

const BoardEditorUI = ({ value, onChange }: BoardEditorUIProps) => {
  const quillRef = useRef<ReactQuill | null>(null);

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        try {
          const url = await uploadImage(file);
          const quill = quillRef.current?.getEditor();
          const range = quill?.getSelection();
          if (range) {
            quill?.insertEmbed(range.index, 'image', url);
          }
        } catch (error) {
          alert('Image upload failed.');
        }
      }
    };
  };
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: '#toolbar',
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  return (
    <>
      <ReactQuill
        ref={quillRef}
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
