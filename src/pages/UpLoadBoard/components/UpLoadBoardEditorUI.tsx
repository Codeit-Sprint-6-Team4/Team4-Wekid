import { useEffect, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { postImage } from '@api/image';
import { EditorContainer, QuillWrapper } from './UpLoadBoardEditor.styled';
import './customQuill/quill-custom.css';
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
      const file = input.files ? input.files[0] : null;
      if (file) {
        const editor = quillRef.current?.getEditor();
        const range = editor?.getSelection();
        if (range) {
          try {
            const url = await postImage(file);
            if (url && editor) {
              editor.insertEmbed(range.index, 'image', url);
            }
          } catch (error) {
            console.error('Image upload failed:', error);
          }
        }
      }
    };
  };

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      quill.getModule('toolbar').addHandler('image', imageHandler);
    }
  }, []);

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
    <EditorContainer>
      <QuillWrapper>
        <ReactQuill
          ref={quillRef}
          theme="snow"
          modules={modules}
          value={value}
          onChange={onChange}
          placeholder="본문을 입력해주세요"
        />
        <CustomBoardToolBar />
      </QuillWrapper>
    </EditorContainer>
  );
};

export default BoardEditorUI;
