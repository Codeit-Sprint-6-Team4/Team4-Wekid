import { useMemo, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomBoardToolBar from './customQuali/CustomBoardToolBar';
import { CUSTUM_ICONS } from './customQuali/quali.styled.icon';
import './customQuali/quill-custom.css';

CUSTUM_ICONS;

const EditorUI = () => {
  const [values, setValues] = useState('');

  const modules = useMemo(() => {
    return {
      toolbar: '#toolbar',
    };
  }, []);

  const handleChange = (values: string) => {
    setValues(values);
  };

  return (
    <>
      <CustomBoardToolBar />
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
