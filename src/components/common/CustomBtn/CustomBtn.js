import React from "react";
import "./btn.scss";

// const validateInput = () => {

// }

function CustomBtn(props) {
  const { type, btnText, customClass, onClickHandler } = props;

  return (
    <button type={type} onClick={onClickHandler} className={customClass + " custom"}>
      {btnText}
    </button>
  );
}

export default CustomBtn;
