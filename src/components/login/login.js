import React, { useRef, useEffect } from "react";
import CustomBtn from '../common/CustomBtn/CustomBtn';

import './login.scss';

const Login = props => {
  const userIdref = useRef(null);
  const passIdref = useRef(null);
  useEffect(() => {
      if(localStorage.authKey){
        props.history.push("/dashboard"); // use for redirection
      }
      
  }, [props])

  const checkLogin = () => {
    if (localStorage && !localStorage.getItem("authKey")) {
      if(!userIdref.current.value || !passIdref.current.value){
        alert("Both fields are required!");
        return false;
      }
      // replace after api integrate
      props.history.push('/dashboard');
      if (localStorage) {
        localStorage.setItem("authKey", 1);
      }
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-head">Login Page</h1>
      <div className="login-fields">
        <input type="text" className="custom" placeholder="User id" ref={userIdref} />
        <input type="password" className="custom" placeholder="Password" ref={passIdref} />
        <CustomBtn onClickHandler={checkLogin} btnText={"Submit"} />
      </div>
    </div>
  );
};

export default Login;
