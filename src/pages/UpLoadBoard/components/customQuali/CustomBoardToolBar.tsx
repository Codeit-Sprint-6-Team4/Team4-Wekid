const CustomBoardToolBar = () => {
  return (
    <div id="toolbar">
      <div className="frame-ql-fromats">
        <span className="ql-formats">
          <button className="ql-bold" />
          <button className="ql-italic" />
          <button className="ql-underline" />
        </span>

        <span className="ql-formats">
          <button className="ql-align" value="" />
          <button className="ql-align" value="center" />
          <button className="ql-align" value="right" />
        </span>

        <span className="ql-formats">
          <button className="ql-list" value="bullet"></button>
          <button className="ql-list" value="ordered"></button>
        </span>

        <span className="ql-formats">
          <button className="ql-color" />
          <button className="ql-image" />
        </span>

        <span className="ql-formats ql-toolbar-right">
          <button className="ql-link" />
        </span>
      </div>
    </div>
  );
};

export default CustomBoardToolBar;
