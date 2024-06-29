import React, { useEffect, useMemo, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '@components/button/Button';
import { CUSTUM_ICONS } from './customQuali/quali.styled.icon';
import './customQuali/quill-custom.css';

interface WritingUI {
  content: string;
}
CUSTUM_ICONS;

export const CustomToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-header">
        <option value="1">Header 1</option>
        <option value="2">Header 2</option>
        <option value="3">Header 3</option>
        <option value="4">Header 4</option>
        <option value="5">Header 5</option>
        <option value="6">Header 6</option>
      </select>
    </span>

    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="bullet"></button>
      <button className="ql-list" value="ordered"></button>
    </span>
    <span className="ql-formats">
      <select className="ql-align">
        <option></option>
        <option value="center"></option>
        <option value="right"></option>
        <option value="justify"></option>
      </select>
    </span>

    <span className="ql-formats">
      <button className="ql-image" />
      <button className="ql-video" />
      <button className="ql-link" />
    </span>
  </div>
);
const WritingUI = ({ content }: WritingUI) => {
  const [values, setValues] = useState(content);

  const handleChange = (values: string) => {
    setValues(values);
  };

  useEffect(() => {
    setValues(content);
  }, [content]);

  const modules = {
    toolbar: '#toolbar',
  };
  const module = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['bold', 'italic', 'underline'],
          ,
          [{ header: ['1', '2', '3'] }],

          [{ list: 'bullet' }, { list: 'ordered' }],
          [{ align: [] }],

          ['image', 'video', 'link'],
          ,
        ],
      },
    };
  }, []);

  return (
    <>
      <CustomToolbar />
      <ReactQuill
        theme="snow"
        modules={modules}
        value={values}
        onChange={handleChange}
      />
    </>
  );
};

export default WritingUI;
