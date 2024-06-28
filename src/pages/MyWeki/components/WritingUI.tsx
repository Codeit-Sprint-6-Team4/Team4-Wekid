import React, { useEffect, useMemo, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CUSTUM_ICONS, italic } from './customQuali/quali.styled.icon';
import './customQuali/quill-custom.css';

interface WritingUI {
  content: string;
}
CUSTUM_ICONS;
italic;
const WritingUI = ({ content }: WritingUI) => {
  const [values, setValues] = useState(content);

  const handleChange = (values: string) => {
    setValues(values);
  };
  useEffect(() => {
    setValues(content);
  }, [content]);

  const formats = [
    //'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline'],
          ,
          [{ header: ['1', '2', '3'] }],
          [{ size: ['small', false, 'large', 'huge'] }],
          [{ align: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [
            {
              color: [],
            },
            { background: [] },
          ],
          ['image', 'video', 'link'],
          ,
        ],
      },
    };
  }, []);

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      value={values}
      onChange={handleChange}
    />
  );
};

export default WritingUI;
