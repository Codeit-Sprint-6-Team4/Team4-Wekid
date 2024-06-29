import React, { useEffect, useMemo, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '@components/button/Button';
import CustomToolBar from './customQuali/CustomToolBar';
import { CUSTUM_ICONS } from './customQuali/quali.styled.icon';
import './customQuali/quill-custom.css';

interface WritingUI {
  content: string;
  name: string;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
CUSTUM_ICONS;

const EditorUI = ({ content, name, setIsEdit }: WritingUI) => {
  const modules = useMemo(() => {
    return {
      toolbar: '#toolbar',
    };
  }, []);

  const [values, setValues] = useState('');

  const handleChange = (values: string) => {
    setValues(values);
  };
  const onCancel = () => {
    setIsEdit(false);
  };

  useEffect(() => {
    setValues(content);
  }, [content]);

  return (
    <>
      <CustomToolBar name={name} onCancel={onCancel} />
      <ReactQuill
        theme="snow"
        modules={modules}
        value={values}
        onChange={handleChange}
      />
    </>
  );
};

export default EditorUI;
