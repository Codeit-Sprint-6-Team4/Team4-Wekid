import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import { postEditingProfile } from '@api/profile';
import Modal from '@components/modal/Modal';
import CustomToolBar from './customQuali/CustomToolBar';
import { CUSTUM_ICONS } from './customQuali/quali.styled.icon';
import './customQuali/quill-custom.css';

interface WritingUI {
  content: string;
  name: string;
  modalInput: string;
  onSave: () => void;
  onCancel: () => void;
  onTimeOut: () => void;
  editorImageHandler: () => void;
}

CUSTUM_ICONS;
const FIVE_MINUTES = 300000;

const EditorUI = forwardRef<ReactQuill, WritingUI>(
  (
    {
      content,
      name,
      modalInput,
      onSave,
      onCancel,
      onTimeOut,
      editorImageHandler,
    },
    ref,
  ) => {
    const [values, setValues] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { code } = useParams();
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const onChange = (value: string) => {
      setValues(value);
    };

    const timeCheck = async () => {
      if (typeof code === 'string') {
        try {
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }
          timerRef.current = setTimeout(() => {
            setIsModalOpen(true);
          }, FIVE_MINUTES);
          await postEditingProfile(code, modalInput);
        } catch (error) {}
      }
    };

    const modules = useMemo(() => {
      return {
        toolbar: {
          container: '#toolbar',
          handlers: {
            image: editorImageHandler,
          },
        },
      };
    }, []);

    useEffect(() => {
      setValues(content);
    }, []);

    useEffect(() => {
      timeCheck();
    }, [values]);

    return (
      <>
        {isModalOpen && (
          <Modal type="disconnect" onConfirm={onTimeOut} onClose={onTimeOut} />
        )}
        <CustomToolBar name={name} onCancel={onCancel} onSave={onSave} />
        <ReactQuill
          ref={ref}
          theme="snow"
          modules={modules}
          value={values}
          onChange={onChange}
        />
      </>
    );
  },
);

export default EditorUI;
