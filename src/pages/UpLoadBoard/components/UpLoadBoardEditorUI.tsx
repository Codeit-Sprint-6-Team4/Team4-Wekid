import { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Modal from '@components/modal/Modal';
import { EditorContainer, QuillWrapper } from './UpLoadBoard.styled';
import './customQuill/quill-custom.css';
import { CUSTUM_ICONS } from './customQuill/upLoadBoardCustomQuali.styled.icon';
import CustomBoardToolBar from './customQuill/upLoadBoardCustomToolBar';

CUSTUM_ICONS;

interface RangeStatic {
  index: number;
  length: number;
}

interface BoardEditorUIProps {
  value: string;
  onChange: (value: string) => void;
  onImageUpload: (imageUrl: string) => void;
}

const BoardEditorUI = ({
  value,
  onChange,
  onImageUpload,
}: BoardEditorUIProps) => {
  const quillRef = useRef<ReactQuill | null>(null);
  const [showImageModal, setShowImageModal] = useState(false);
  const [range, setRange] = useState<RangeStatic | null>(null);

  const imageHandler = () => {
    const editor = quillRef.current?.getEditor();
    const currentRange = editor?.getSelection();
    if (currentRange) {
      setRange(currentRange);
      setShowImageModal(true);
    }
  };

  const handleImageUpload = (imageUrl: string) => {
    if (range && quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.insertEmbed(range.index, 'image', imageUrl);
      onImageUpload(imageUrl);
    }
    setShowImageModal(false);
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
      {showImageModal && (
        <Modal
          type="imageUpload"
          onClose={() => setShowImageModal(false)}
          onConfirm={handleImageUpload}
        />
      )}
    </EditorContainer>
  );
};

export default BoardEditorUI;
