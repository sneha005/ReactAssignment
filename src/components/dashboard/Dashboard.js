import React, { useEffect, useState } from "react";
import CustomBtn from "../common/CustomBtn/CustomBtn";

import "./dashboard.scss";

const Dashboard = props => {
  const [textArea, setTextArea] = useState("");
  useEffect(() => {
    !localStorage.authKey && props.history.push("/");
  }, [props]);

  const signOut = () => {
    localStorage.removeItem("authKey");
    props.history.push("/");
  };
  const onChangeHandler = e => {
    // used to update text are input
    // input, textarea works only when state are maintained
    setTextArea(e.target.value);
  }
  const saveFormData = () => {
    // add data saving functionality here
  }

  return (
    <div className="dashboard-container">
      <div className="header">
        <span>My Dashboard</span>
        <span onClick={signOut}>Sign out</span>
      </div>      
      <div className="dashboard-body">
        <div className="article-input-container">
          <textarea 
            customclass="input-area"
            btntext="create field"
            onChange={e => onChangeHandler(e)}
          >{textArea}</textarea>
          <CustomBtn
            type="button"
            customClass="custom-btn"
            btnText="Save article"
            onClickHandler={() => saveFormData()}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
