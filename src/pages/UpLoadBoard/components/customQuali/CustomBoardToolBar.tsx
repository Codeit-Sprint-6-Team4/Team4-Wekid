const CustomBoardToolBar = () => {
  return (
    <div id="toolbar">
      <div className="frame-ql-fromats">
        <span className="ql-formats">
          <select className="ql-header">
            <option value="1">Header 1</option>
            <option value="2">Header 2</option>
            <option value="3">Header 3</option>
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

        <button className="ql-image" />
        <button className="ql-video" />
        <button className="ql-link" />
      </div>
    </div>
  );
};

export default CustomBoardToolBar;
