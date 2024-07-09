const CustomBoardToolBar = () => {
  return (
    <div id="toolbar">
      <div className="frame-ql-fromats">
        <span className="ql-formats">
          <button className="ql-bold" title="굵게" />
          <button className="ql-italic" title="기울임꼴" />
          <button className="ql-underline" title="밑줄" />
        </span>

        <span className="ql-formats">
          <button className="ql-align" value="" title="왼쪽 정렬" />
          <button className="ql-align" value="center" title="가운데 정렬" />
          <button className="ql-align" value="right" title="오른쪽 정렬" />
        </span>

        <span className="ql-formats">
          <button
            className="ql-list"
            value="bullet"
            title="글머리 기호 목록"
          ></button>
          <button
            className="ql-list"
            value="ordered"
            title="번호 매기기 목록"
          ></button>
        </span>

        <span className="ql-formats">
          <span
            className="tooltip-container color-select"
            data-title="글자 색상"
          >
            <select className="ql-color"></select>
          </span>
          <button
            className="ql-image image-button"
            title="이미지 삽입"
            onClick={() => console.log('hello')}
          />
        </span>

        <span className="ql-formats ql-toolbar-right">
          <button className="ql-link" title="링크 삽입" />
        </span>
      </div>
    </div>
  );
};

export default CustomBoardToolBar;
