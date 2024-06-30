import React, { useEffect, useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomToolBar from './customQuali/CustomToolBar';
import { CUSTUM_ICONS } from './customQuali/quali.styled.icon';
import './customQuali/quill-custom.css';

interface WritingUI {
  content: string;
  name: string;
  onSave: () => void;
  onCancel: () => void;
}

CUSTUM_ICONS;

const EditorUI = ({ content, name, onSave, onCancel }: WritingUI) => {
  const [values, setValues] = useState('');

  const modules = useMemo(() => {
    return {
      toolbar: '#toolbar',
    };
  }, []);

  const handleChange = (values: string) => {
    setValues(values);
  };

  useEffect(() => {
    setValues(content);
  }, [content]);

  return (
    <>
      <CustomToolBar name={name} onCancel={onCancel} onSave={onSave} />
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
